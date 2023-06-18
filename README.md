

<!DOCTYPE html>
<html>

<head>
  <style>
    /* Reset default styles */
    body,
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    /* Navigation styles */
    nav {
      background-image: url('https://wallpapers.com/wallpapers/various-colorful-plants-with-flowers-vector-art-jrkj1kt1fi7bxfnu.html');
      background-size: cover;
      background-position: center;
      color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }

    .menu {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px;
    }

    .menu li {
      padding: 10px;
    }

    .menu a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .menu a:hover {
      color: #ffd700;
    }

    /* Dropdown styles */
    .submenu {
      display: none;
      position: absolute;
      background-color: #444;
    }

    .menu li.dropdown:hover .submenu {
      display: block;
    }

    /* Media queries for smaller screens */
    @media screen and (max-width: 768px) {
      .menu {
        flex-direction: column;
        align-items: center;
      }

      .menu li {
        padding: 10px;
        text-align: center;
        border-top: 1px solid #ffffff;
      }

      .menu li.dropdown:hover .submenu {
        display: none;
      }

      .submenu {
        position: static;
        display: block;
        background-color: transparent;
      }
    }

    body {
      justify-content: center;

      display: flex;
      text-align: center;
      align-items: center;
      position: relative;
      height: 100vh;
      width: 1900px;
      background-image: url(https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      padding-top: 50px;
    }

    #s:hover {
      border-radius: 10%;
      border-color: aqua;
      color: rgb(135, 144, 222);
      transform: rotate(5deg);
      transition: transform 1s;
    }

    #b:hover {
      background-color: rgb(107, 111, 189);
    }
  </style>
  <title>PhytophileOasis</title>
</head>

<body>

  <nav>
    <ul class="menu">
      <li><a href="#">PHYTOPHILE OASIS</a><p style="font-size: 10px;"></p></li>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <li><a href="#">Home</a></li>
      
      <li class="dropdown">
        <a href="#">shop</a>
        <ul class="submenu">
          <li><a href="#">Check offers</a></li>
          <li><a href="#">Plants categories</a></li>
          
        </ul>
      </li>
      
      <li class="dropdown">
        <a href="#">Services</a>
        <ul class="submenu">
          <li><a href="#">join oasis</a></li>
          <li><a href="#">read blogs</a></li>
          <li><a href="#">view products</a></li>
        </ul>
      </li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">about us</a></li>
    </ul>
  </nav>

  <div class="content">
    <!-- Your page content goes here -->
  </div>
  <form>
    <fieldset id="s">
      <legend>Login Page</legend>
      <p>

        Name: <input type="text" name="name" placeholder="enter your name here" id="n">
        <br>
        <br>
        Email: <input type="email" email="email" placeholder="enter your email here" id="e">
        <br>
        <br>
        Password: <input type="password" password="password" placeholder="enter your password here" id="p">
        <br>



        <br>
        <button id="b">Submit</button>

      </p>
    </fieldset>
  </form>
</body>

</html>
