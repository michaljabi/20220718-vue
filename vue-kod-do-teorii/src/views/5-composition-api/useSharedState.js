import { computed, reactive } from "vue";

const user = reactive({
  name: "",
  email: "",
});

const isAuth = computed(() => Boolean(user.email));

function logInUser(name, email) {
  user.name = name;
  user.email = email;
}

function logOutUser() {
  user.name = "";
  user.email = "";
}

export { user, isAuth, logInUser, logOutUser };
