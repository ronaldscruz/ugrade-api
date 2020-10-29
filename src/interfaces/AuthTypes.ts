export interface SignInPayload {
	email: string;
	password: string;
}

export interface ForgotPasswordPayload {
	email: string;
}

export interface ChangePasswordPayload {
	email: string;
	pwdChangingToken: string;
}
