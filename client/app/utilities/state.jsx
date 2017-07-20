export const consolidateState = (isError, isLoaded, isLoading) => {
  if(isError) {
    return 'error';
  } else if(isLoading) {
    return 'wait';
  } else if (isLoaded) {
    return 'loaded';
  } else {
    return 'wait';
  }
}
