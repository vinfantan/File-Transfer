<?php
 echo "<html>";
 echo "<head>";

  echo ' <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1, shrink-to-fit=no"/>
  <link rel="stylesheet" href="Bootstrap/css/bootstrap.min.css"/>';

  echo '<style>
        a {
            color: red;
            text-decoration: none;
            border-bottom: 1px solid green;
        }
  </style>';
  echo '</head>';
  
 

 echo '<body>
       <div class="container-md border mt-3">
       <h1 class="text-center"> Files at Server</h1>
       </div>

       ';
       
       echo '<div class="container-md border mt-3">
       <div class="text-left"> <a href="index.html" style="text-decoration: none;"><button type="button" class="btn btn-sm btn-danger btn-block"> GO Back </button></a> </div> </br>';
       if ($handle = opendir('uploads')) {

        while (false !== ($entry = readdir($handle))) {
  
          if ($entry != "." && $entry != "..") {
  
            echo '<a href="uploads/' . $entry . '" download>' .  $entry .'</a></br>';
          }
        }
      }
      closedir($handle);

      
     echo '</div>';
    echo '
    <div class="container-md border mt-3 mb-5 text-center">
    <a href="index.html"><button type="button" class="btn btn-success btn-sm btn-block">Upload Files</button></a>
     </div>';

 echo '<script src="Bootstrap/js/jquery-3.5.1.slim.min.js"></script>
 <script src="Bootstrap/js/popper.min.js"></script>
 <script src="Bootstrap/js/bootstrap.min.js"></script>';
 
 echo "</body></html>";
 ?>
