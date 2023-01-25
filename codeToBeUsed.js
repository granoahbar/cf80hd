//This will be used for signing out

const navigation = useNavigation()

const handleSignOut = () => {
  auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
}

  <View style={styles.container}>
    <Text>{auth.currentUser?.email}</Text>
    <TouchableOpacity
      // onPress={handleSignOut}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Sign out</Text>
    </TouchableOpacity>
  </View>