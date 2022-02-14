import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Jar = () => {
    //complete


return (
<!DOCTYPE html>
<html lang="en">

<!--- Links to bootstrap, font awesome, google fonts and style.css-->
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="assets/style.css" />
    <title>Work Day Scheduler</title>
</head>

<body>
    <!---- Jumbotron-->
    <header class="jumbotron">
        <h1 class="display-3">Work Day Scheduler</h1>
        <p class="lead">A simple calendar app for scheduling your work day</p>
        <!--- The current date-->
        <p id="currentDay" class="lead"></p>
    </header>
    <!--- Hours and TO Do list-->
    <h2> Your Day </h2>
    <div class="container">
        <!--- AM --->

        <div class="8amRow row">
            <div class="rowHour col-1">8<span>am</span></div>
            <textarea class="col-10" data-number="8"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <div class="9amRow row">
            <div class="rowHour col-1">9<span>am</span></div>
            <textarea class="col-10" data-number="9"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <div class="10amRow row">
            <div class="rowHour col-1">10<span>am</span></div>
            <textarea class="col-10" data-number="10"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <div class="11amRow row">
            <div class="rowHour col-1">11<span>am</span></div>
            <textarea class="col-10" data-number="11"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <div class="12pmRow row">
            <div class="rowHour col-1">12<span>pm</span></div>
            <textarea class="col-10" data-number="12"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <!--- PM --->


        <div class="1pmRow row">
            <div class="rowHour col-1">1<span>pm</span></div>
            <textarea class="col-10" data-number="13"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <div class="2pmRow row">
            <div class="rowHour col-1">2<span>pm</span></div>
            <textarea class="col-10" data-number="14"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <div class="3pmRow row">
            <div class="rowHour col-1">3<span>pm</span></div>
            <textarea class="col-10" data-number="15"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <div class="4pmRow row">
            <div class="rowHour col-1">4<span>pm</span></div>
            <textarea class="col-10" data-number="16"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <div class="5pmRow row">
            <div class="rowHour col-1">5<span>pm</span></div>
            <textarea class="col-10" data-number="17"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


        <div class="6pmRow row">
            <div class="rowHour col-1">6<span>pm</span></div>
            <textarea class="col-10" data-number="18"></textarea>
            <button class="saveBtn col-1"><i class="far fa-save"></i></button>
        </div>


    </div>
<!--- Sources for Jquery, Moment and Java Script-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="assets/script.js"></script>
</body>

</html>

);
};

export default Jar;