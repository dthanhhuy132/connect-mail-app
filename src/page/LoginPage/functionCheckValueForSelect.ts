function checkValueForSelect(grayout: HTMLSelectElement | null) {

  if (
    grayout?.value === "" ||
    grayout?.value === "-------Choose your email"
  ) {
    grayout?.classList.add("gray");
  } else {
    grayout?.classList.remove("gray");
  }
}

export default checkValueForSelect