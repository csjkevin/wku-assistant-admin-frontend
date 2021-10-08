interface InitialState {
  currentUser: {
    authority?: string[];
  };
}

export default function (initialState: InitialState) {
  const { currentUser } = initialState;
  const authority = currentUser?.authority;
  return {
    user: !!currentUser,
    onestop:
      Array.isArray(authority) && (authority.includes('onestop') || authority.includes('admin')),
  };
}
