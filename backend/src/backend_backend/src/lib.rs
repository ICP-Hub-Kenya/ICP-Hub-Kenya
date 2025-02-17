use ic_cdk::query;

mod icrc_standards;
mod donations;

#[query]
fn icphubkenya_backend() -> String {
    return "Hello, this is our backend!".to_string();
}

use crate::donations::Donation;
use crate::icrc_standards::{SupportedStandard, Icrc28TrustedOriginsResponse};

ic_cdk::export_candid!();