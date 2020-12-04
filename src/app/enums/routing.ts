export enum EAppRoutes {
    Landing = 'landing',
    Home = '',
    Auth = 'auth',
    UserResendEmail = 'resend-email',
    Actions = 'actions',
    Monitoring = 'monitoring',
    History = 'history',
    Users = 'users',
    Help = 'help',
    Payouts = 'payouts',
    Settings = 'settings',
    CreateUser = 'create-user',
    ProfitSettings = 'profit-settings',
    Connect = 'connect',
    Terms = 'terms',
    Policy = 'policy',
    Math = 'math',
}

export enum EActionsRoutes {
    UserActivate = 'user-acivate',
}

export const userRootRoute = EAppRoutes.Monitoring;
export const homeRoute = EAppRoutes.Home;
export const authRoute = EAppRoutes.Auth;
