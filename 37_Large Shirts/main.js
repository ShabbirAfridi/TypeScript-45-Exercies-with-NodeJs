function make_shirt(size, printMassage) {
    if (size === void 0) { size = "Medium"; }
    if (printMassage === void 0) { printMassage = "I love TypeScript"; }
    console.log("creating a ".concat(size, " shirt With the ").concat(printMassage, " Print on Massage"));
}
make_shirt();
make_shirt("Large");
make_shirt("Small", "I love JavaScript");
