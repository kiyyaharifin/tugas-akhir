document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userInfo").innerText = "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <li><a href="javascript:void(0)" onclick="logout()">
            <i class="fa fa-sign-out"></i>
            <em>Keluar</em>
            </a>
            </li>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
