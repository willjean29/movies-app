export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Enrollment: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}
