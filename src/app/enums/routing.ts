export enum EAppRoutes {
    Home = "",
    Auth = "auth",
    UserResendEmail = "resend-email",
    Actions = "actions",
    Monitoring = "monitoring",
    History = "history",
    Users = "users",
    Help = "help",
    Payouts = "payouts",
    Settings = "settings",
}

export enum EActionsRoutes {
    UserActivate = "useracivate",
}

export const userRootRoute = EAppRoutes.Monitoring;
