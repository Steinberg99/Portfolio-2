const search = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Search";

  form.appendChild(input);
  form.appendChild(submit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value === "") return;

    window.location.hash = `#user/${input.value}`;
  });

  return form;
};

export { search };
