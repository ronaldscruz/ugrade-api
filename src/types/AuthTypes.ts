export type SignInPayload = {
  email: string;
  password: string;
}

export type ForgotPasswordPayload = {
  email: string;
}

export type ChangePasswordPayload = {
  email: string;
  pwdChangingToken: string;
}