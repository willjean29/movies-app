export const throwUnhandleActionError = (type: string): never => {
  throw new Error(`Unhandled action type: ${type}`);
};
