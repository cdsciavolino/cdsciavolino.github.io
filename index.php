<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Chris Sciavolino</title>
        
        <!-- Font Imports -->
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet">
        
        <!-- Bootstrap CSS -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="styles/all.css" type="text/css">
        
        <!-- jQuery CDN -->
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        
        <!-- Bootstrap JS -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </head>
    <body>
        <!--------------------- Banner Section -------------------------->
        <section id='banner-wrapper'>
            <div id="banner-background"></div>
            <div id="banner-title-wrapper">
                <h1 id="banner-title">Welcome.</h1>
                <h3 id="banner-subtitle">Subtitle</h3>
            </div>
        </section> <!-- end banner-wrapper -->
        
        <div class="container">
            <!--------------------- Overview Section ------------------------>
            <section id="overview-wrapper">
                <div class="section-title-wrapper">
                    <h1 class="section-title">Overview</h1>
                </div>

                <div class="row">
                    <div class="col-md-5">
                        <div class="row">
                            <div id='overview-collage-wrapper'>
                                <img src="images/overview/sciavolino.jpg" id="overview-image-1" class="col-md-3 overview-image" alt="Chris Headshot">
                                <img src="images/overview/group_pic.jpg" id="overview-image-2" class="col-md-offset-2 col-md-3 overview-image" alt="Chris Headshot">
                                <img src="images/overview/prof_pic.jpg" id="overview-image-3" class="col-md-3 overview-image" alt="Chris Headshot">
                            </div>
                        </div>
                    </div>
                    
                    <div id='overview-text-wrapper' class='col-md-offset-1 col-md-6'>
                        <p class='text-block'>
                            I am Chris Sciavolino, a sophomore Computer Science major at Cornell University. I've been programming since my sophomore year of high school, loving it ever since. Although I've only taken formal classes in Java, Python, and OCaml, I also know Swift through a supplementary course and practice on my own time.
                        </p>
                        <p class='text-block'>
                            I am currently seeking full-time internship opportunities during the summer of 2018.
                        </p>
                        <div class='centered'>
                            <a class='ext-button'>Resume</a>
                        </div>
                    </div>
                </div> <!-- end overview row -->
            </section> <!-- end overview-wrapper -->
            
            <!------------------ Work Experience Section -------------------->
            <section id='work-exp-wrapper'>
                <div class="section-title-wrapper">
                    <h1 class="section-title">Prior Work Experience</h1>
                </div>
                
                <div class="row work-section-wrapper">
                    <div class='col-md-4'>
                        <div id="redroute-icon-wrapper">
                            <img class='work-exp-image' src='images/work/redroute-icon.png' alt="RedRoute Inc. Icon">
                        </div>
                    </div>
                    <div class='col-md-offset-1 col-md-7'>
                        <div class='subsection-title-wrapper right-align'>
                            <h3 class='subsection-title'>Software Development Intern</h1>
                            <h3 class='subsection-title'>RedRoute Inc.</h1>
                            <div class='subsection-title-divider right-divider'></div>
                        </div>
                        <div class='subsection-text-wrapper'>
                            <p class='text-block right-align'>
                                Over the summer of 2017, I worked with a development team on a call taking service for taxi dispatchers. The goal is to replace human call taking with an interactive voice response (IVR) system capable of understanding customer speech and converting calls into actionable requests dispatchers can satisfy. Two of the largest strides the company made during the summer was improved UX design (keeping interactions succinct) and accuracy (processing correct locations). 
                            </p>
                        </div>
                    </div>
                </div> <!-- end redroute-section-wrapper -->
                
                <div class='row work-section-wrapper'>
                    <div class='col-md-7'>
                        <div class="subsection-title-wrapper left-align">
                            <h3 class='subsection-title'>Computer Science Teaching Assistant</h3>
                            <h3 class='subsection-title'>Cornell University</h3>
                            <div class='subsection-title-divider'></div>
                        </div>
                        
                        <div class='subsection-text-wrapper'>
                            <p class='text-block left-align'>
                                Ever since spring of 2017, I’ve served on course staff for the Computing and Information Science Department at Cornell University. I love sparking interest in the field and teaching peers the ins and outs of computer science, as prior teaching assistants and professors have done for me. I’ve served on course staff for: 
                            </p>
                            <div id='ta-experience-wrapper'>
                                <h1 class='ta-experience-header'>CS 2110: Object-Oriented Programming and Data Structures</h1>
                                <h1 class='ta-experience-subheader'>Spring 2017, Summer 2017, Fall 2017</h1>
                                <h1 class='ta-experience-header'>INFO 1300: Introductory Design and Programming for the Web</h1>
                                <h1 class='ta-experience-subheader'>Fall 2017</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div class='col-md-offset-1 col-md-4'>
                        <div id='cornell-logo-wrapper'>
                            <img class='work-exp-image' src='images/work/cornell-logo.svg' alt="Cornell University Logo">
                        </div>
                    </div>
                </div>
            </section><!-- end work-exp-wrapper-->
            
        </div> <!-- end container -->
        
        <footer>
        
        </footer>
    </body>
</html>