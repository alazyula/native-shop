import { useRootNavigationState, Redirect } from "expo-router";

export default function Index() {
  const rootNavigationState = useRootNavigationState();
  if (rootNavigationState === undefined) {
    return null;
  }

  return <Redirect href="/shopping" />;
}