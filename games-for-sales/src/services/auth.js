import axiosInstance from "../configurations/axios";

const authService = {
  // Funzione per la registrazione
  register: async (username, password) => {
    const response = await axiosInstance.post("/auth/register", {
      username,
      password,
    });
    if (response.data.token) {
      // Salva il token in localStorage dopo il register riuscito
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response;
  },

  // Funzione per il login
  login: async (username, password) => {
    const response = await axiosInstance.post("/auth/login", {
      username,
      password,
    });
    if (response.data.token) {
      // Salva il token in localStorage dopo il login riuscito
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response;
  },

  // Funzione per il logout
  logout: () => {
    // Rimuovi il token dal localStorage per "effettuare il logout"
    localStorage.removeItem("token");
  },
};

export default authService;
