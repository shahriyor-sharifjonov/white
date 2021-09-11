// Vanilla Javascript
var input = document.querySelector("#telephone");
window.intlTelInput(input,({
  allowDropdown: true,
  autoHideDialCode: true,
  autoPlaceholder: "polite",
  customPlaceholder: null,
  dropdownContainer: null,
  excludeCountries: [],
  formatOnDisplay: true,
  geoIpLookup: null,
  hiddenInput: "",
  initialCountry: "ua",
  localizedCountries: null,
  nationalMode: true,
  onlyCountries: [],
  placeholderNumberType: "MOBILE",
  preferredCountries: [ "us", "gb" ],
  separateDialCode: false,
  utilsScript: ""
}));