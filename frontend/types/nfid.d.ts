declare module '@nfid/identitykit/react' {
  export const IdentityKitProvider: React.FC<any>;
  export const ConnectWallet: React.FC;
  export const useAgent: () => any;
  export const IdentityKitAuthType: {
    DELEGATION: 'DELEGATION';
  };
}

declare module '@nfid/identitykit' {
  export const IdentityKitAuthType: {
    DELEGATION: 'DELEGATION';
  };
}
