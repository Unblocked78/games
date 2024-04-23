function redirectTo(fromPath, toPath) {
    if (window.location.pathname === fromPath) {
        window.location.replace(toPath);
    }
}
redirctTo("/cookieclicker", "/cookieclicker.html")
