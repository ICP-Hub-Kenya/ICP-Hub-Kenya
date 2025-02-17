use candid::{CandidType, Decode, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, Cell, DefaultMemoryImpl, StableBTreeMap, Storable};
use std::{borrow::Cow, cell::RefCell};
use serde::{Deserialize, Serialize};

type Memory = VirtualMemory<DefaultMemoryImpl>;

#[derive(CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Donation {
    id: u64,
    donor: String,
    amount: u64,
    token_type: String,
    timestamp: u64,
}

impl Storable for Donation {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Donation {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> = RefCell::new(
        MemoryManager::init(DefaultMemoryImpl::default())
    );

    static DONATION_MAP: RefCell<StableBTreeMap<u64, Donation, Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0)))
        )
    );

    static COUNTER: RefCell<Cell<u64, Memory>> = RefCell::new(
        Cell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
            0
        ).unwrap()
    );
}

#[ic_cdk::update]
fn record_donation(donor: String, amount: u64, token_type: String) -> Donation {
    let id = COUNTER.with(|counter| {
        let current_value = *counter.borrow().get();
        counter.borrow_mut().set(current_value + 1).unwrap();
        current_value
    });

    let donation = Donation {
        id,
        donor,
        amount,
        token_type,
        timestamp: ic_cdk::api::time(),
    };

    DONATION_MAP.with(|donations| {
        donations.borrow_mut().insert(id, donation.clone());
    });

    donation
}

#[ic_cdk::query]
fn get_donation(id: u64) -> Option<Donation> {
    DONATION_MAP.with(|donations| donations.borrow().get(&id))
}

#[ic_cdk::query]
fn list_donations() -> Vec<Donation> {
    DONATION_MAP.with(|donations| {
        donations.borrow()
            .iter()
            .map(|(_, donation)| donation.clone())
            .collect()
    })
}

#[ic_cdk::query]
fn get_total_by_token() -> Vec<(String, u64)> {
    let mut totals = std::collections::HashMap::new();
    
    DONATION_MAP.with(|donations| {
        for (_, donation) in donations.borrow().iter() {
            *totals.entry(donation.token_type.clone()).or_insert(0) += donation.amount;
        }
    });
    
    totals.into_iter().collect()
}