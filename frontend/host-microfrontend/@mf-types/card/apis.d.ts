
    export type RemoteKeys = 'card/CardSection';
    type PackageType<T> = T extends 'card/CardSection' ? typeof import('card/CardSection') :any;