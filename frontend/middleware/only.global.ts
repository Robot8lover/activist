export default defineNuxtRouteMiddleware(async (to) => {
  const { userIsAdmin, userIsSignedIn } = useUser()
  const localePath = useLocalePath();
  const getRouteBaseName = useRouteBaseName();

  const userOnlyNames = [
    "events-create",
    "groups-create",
    "organizations-create",
    "resources-create",
  ];
  const adminOnlyNames = [
  ];

  const baseName = getRouteBaseName(to);

  if (!userIsSignedIn && userOnlyNames.includes(baseName)) {
    return navigateTo(localePath("/auth/sign-in"))
  } else if (userIsSignedIn && !userIsAdmin && adminOnlyNames.includes(baseName)) {
    return navigateTo(localePath("/home"))
  }
});
