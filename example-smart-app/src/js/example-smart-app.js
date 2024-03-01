<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
    <title>Example-SMART-App</title>

    <link rel='stylesheet' type='text/css' href='./src/css/example-smart-app.css'>
    <!--
      Temporarily disable cerner-smart-embeddable-lib
      <link rel='stylesheet' type='text/css' href='./lib/css/cerner-smart-embeddable-lib-1.0.0.min.css'>
    -->
  </head>
  <body>
    <div id='errors'>
    </div>
    <div id="loading" class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
    <div id='holder' >
      <h2>Example-SMART-App</h2>

      <h2>Patient Resource</h2>
      <table>
        <tr>
          <th>First Name:</th>
          <td id='fname'></td>
        </tr>
        <tr>
          <th>Last Name:</th>
          <td id='lname'></td>
        </tr>
        <tr>
          <th>Gender:</th>
          <td id='gender'></td>
        </tr>
        <tr>
          <th>Date of Birth:</th>
          <td id='birthdate'></td>
        </tr>
      </table>
      <h2>Observation Resource</h2>
      <table>
        <tr>
          <th>Height:</th>
          <td id='height'></td>
        </tr>
        <tr>
          <th>Systolic Blood Pressure:</th>
          <td id='systolicbp'></td>

        </tr>
        <tr>
          <th>Diastolic Blood Pressure:</th>
          <td id='diastolicbp'></td>
        </tr>
        <tr>
          <th>LDL:</th>
          <td id='ldl'></td>
        </tr>
        <tr>
          <th>HDL:</th>
          <td id='hdl'></td>
        </tr>
      </table>
     <h2>Appointments</h2>
<style>
    body {
        font-family: Arial, sans-serif;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
        margin: 0 auto;
    }

    th, td {
        padding: 10px;
        border: 1px solid #dddddd;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #f2f2f2;
    }
</style>
<table id="appointmentTable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actor</th>
            <th>Patient</th>
        </tr>
    </thead>
    <tbody>
        <!-- Table body will be populated dynamically -->
    </tbody>
</table>
        <h2>Patient Ecounter</h2>
        <table id="PatientEncounter">
            <thead>
        <tr>
            <th>Type</th>
            <th>Patient</th>
            <th>Location</th>
            <th>Encounter Type:</th>
            <th>Class</th>
            <th>Status</th>
            <th>Service Provider</th>
        </tr>
    </thead>
             <tbody>
        <!-- Table body will be populated dynamically -->
    </tbody>
</table>
    </div>
    <!-- Required JS files to enable this page to embed within an MPage -->
    <!--
      Temporarily disable cerner-smart-embeddable-lib
      <script src='https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js'></script>
      <script src='./lib/js/cerner-smart-embeddable-lib-1.0.0.min.js'></script>
    -->

    <!-- Application-level javascript-->
    <script src='./src/js/example-smart-app.js'></script>

    <!-- FHIR Client JS Library -->
    <script src='./lib/js/fhir-client-v0.1.12.js'></script>

    <!-- Prevent session bleed caused by single threaded embedded browser and sessionStorage API -->
    <!-- https://github.com/cerner/fhir-client-cerner-additions -->
    <script src='./lib/js/fhir-client-cerner-additions-1.0.0.js'></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script>
      extractData().then(
        //Display Patient Demographics and Observations if extractData was success
        function(p, appointments, encounters) {
          drawVisualization(p, appointments, encounters);
        },

        //Display 'Failed to call FHIR Service' if extractData failed
        function() {
          $('#loading').hide();
          $('#errors').html('<p> Failed to call FHIR Service </p>');
        }
      );
    </script>
  </body>
</html>
