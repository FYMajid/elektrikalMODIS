// button toggle
function menuToggle() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");

  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Tambahkan event listener untuk setiap elemen navbar
const navbarElements = document.querySelectorAll(".navigation a");

navbarElements.forEach((element) => {
  element.addEventListener("click", () => {
    // Tutup menu setelah elemen navbar diklik
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");

    menuToggle.classList.remove("active");
    navigation.classList.remove("active");
  });
});

// Tambahkan event listener untuk menutup menu jika di luar menu atau tombol diklik
document.addEventListener("click", (event) => {
  const navigation = document.querySelector(".navigation");
  const menuToggle = document.querySelector(".menuToggle");

  // Periksa apakah yang diklik berada di luar menu dan tombol toggle
  if (
    !navigation.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    navigation.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});
