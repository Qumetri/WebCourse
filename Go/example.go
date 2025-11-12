package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Response struct {
	Status  string `json:"status"`
	Message string `json:"message.omitempty"`
}

func health(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Application-Type", "application/json")
	resp := Response{
		Status: "OK",
	}
	json.NewEncoder(w).Encode(resp)
}

func buzz(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "buzz")
}

func brrr(w http.ResponseWriter, r *http.Request) {
	_, _ = fmt.Fprint(w, "brrr")

}
func main() {
	http.HandleFunc("/buzz", buzz)
	http.HandleFunc("/brrr", brrr)
	http.HandleFunc("/health", health)

	fmt.Printf("Server is sup and running\n")
	_ = http.ListenAndServe(":8080", nil)

}
