function openStages(evt, cloudMigrationStrategies) {
    let i, stagesContents;
    stagesContents = document.getElementsByClassName("stagesContents");
    for (i = 0; i < stagesContents.length; i++) {
        stagesContents[i].style.opacity = "0";
        stagesContents[i].style.height = "0";
        stagesContents[i].style.bottom = "-40px";
        stagesContents[i].style.padding = "0";
    }
    stagesNumberedContent = document.getElementsByClassName("stagesNumberedContent");
    for (i = 0; i < stagesNumberedContent.length; i++) {
        stagesNumberedContent[i].className = stagesNumberedContent[i].className.replace(" active", "");
    }
    document.getElementById(cloudMigrationStrategies).style.opacity = "1";
    document.getElementById(cloudMigrationStrategies).style.height = "auto";
    document.getElementById(cloudMigrationStrategies).style.bottom = "0";
    document.getElementById(cloudMigrationStrategies).style.padding = "150px 0 0 0";
    evt.currentTarget.className += " active";
}


function openSteps(evt, cloudMigration) {
    let i, cloudMigartionStepContent;
    cloudMigartionStepContent = document.getElementsByClassName("cloudMigartionStepContent");
    for (i = 0; i < cloudMigartionStepContent.length; i++) {
        cloudMigartionStepContent[i].style.display = "none";
        $('.cloudMigrationTab').css(
            'margin-left', '0');

        $('.cloudMigrationTab img').css(
            'transform', 'initial');
    }
    cloudMigrationClick = document.getElementsByClassName("cloudMigrationClick");
    for (i = 0; i < cloudMigrationClick.length; i++) {
        cloudMigrationClick[i].className = cloudMigrationClick[i].className.replace(" active", "");
    }
    document.getElementById(cloudMigration).style.display = "block";
    evt.currentTarget.className += " active";
}


