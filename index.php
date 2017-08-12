<?php
  $description = "Dylan Fisher is a full stack Ruby on Rails developer based in New York City. He is the lead developer at <a href='http://www.linkedbyair.net/' target='_blank'>Linked by Air</a> and recently taught Core Interaction at Parsons School of Design."
?>
<!DOCTYPE html>
<html class="no-js">
<head>
<!--
                                       ii::....:ii
                  iiiiii            ii;:::::::..::::::;;::
              iiiiiiiiiiiiii      ii:::::::::@@iiiii:::::::::::i
            iiii:::iiiii::::::: ::,.::::::fii:::i::.,:::::::::.:;
           iii::::::;iiiiiiii::::..::::::ii::::iiii::..:::::::..:i
         iiii;::::::::::;iiii::...:::::.ii:;:iiii@@ii::.:iiiii:.::
        iiiii.:i:i:;ii;:::::,...::::::::iiiiiiiiiii@@Cl:::iiiii:.:i
       iiiii.:iiiii:i;:::....,::::::::.iiiii::::i:;i@@llll:::iii:i:
       i::::::iii:i::ii:.::::::::::::::iiiii::::;i:::@llll::::ii:iii
      i::::.:i:i:i:;:;:::::::::::l:::::iiii::::::::::t@llll:::..::i:
     i:::::::i:i::i::::::::::::;:::::C;iiiiii::::::::@l:lllll:;:li:::
     i::l::::;:i:::::::::::::::ll:l::@f::iiiii:::::::Gl:ll@l@ll.ll:.,
     :::;::::::;::::::::::::::;lll:l;@@:::iii:i:::::::@:lf@l:Cf@ll::.
    l::l::i:::::::::::::::::::l:lll:@@@;::iii:i:::::::::l@tl::@l:@l:.:
    ::ll::ii;::::::::::::::::lli:ll:@@@@:::i;ii:::::::i;lGll:@@:::G:l:
   l::ll::Lii;:::::::::::::::::tii::@@@@@::::i:::::;::i:@tl@:f@t..l@l.
   l:lil::@iii:::::::::::::::::i:l:f@@@@@@::::::::ii:::i:llGlL@i:.:ft:
   @llil::@i@ii::::::::::::::::::l:@@@@@@@i::::::::ii;ii:llllll;::;l:::
   @lll@i:G@i@ii::::::::::::::i:@ll:@@@@@@@@@:::l::iiiiiiClll@ll:,:l@i:
   lllll@::@@Cii::::::::::::::@illl:@@@@@@@@@@:@::::iiiii:ltl@@l:,:;l:,
   l@lltl@:@@@@ii::::::::::::i@@ll:::i@@@@@@@@@@@:::iiiii:@@@@@@l:::l@:
   l@llll@i;@@@@i::::::::::::i@@lll;::::@@@@@@@@@@@:i:iii:@@@@@@@@::l:,:
   lt@Gl@@l:@@i@Gi:::::::::::i@tlll:::::@@@@@@@@@@@   iii;    @@@: llf;:
   l@@@l@lt:t@@iiii::::::::::i@lGl::::::::@@@@@@@@              @ . ll@:
   l@l@G::@::@@@Ciii::::::::ii@@l::::::::::@@@@@@@                @. ll:
   l@l@Llftt:@@@i@iii;:::::;ii@@t:::::::::@@@@@@@@                 @. l:
   l@ l@Gt;l::@@@iiLlii;::iiii@Li::::::::@@@@@@@@@                 @@.  C.
   l@ l@@l;il:;@@@i@@@iiiiiiil@li::::::::@@@@@@@@@                 @@;@.  @.
   l   l@@l:i:.@@@@@C@@iiiiii@;lCi:::::::@@@@@@@@@                 @@@;;i.  @@;
   @   @@@l::;..@@@@@iiiiiiii@::Ci:::::::@@@@@@@@@                  @@@;; @.
  l@  @@t@tl:,:.,@@@C@iiii@iC@ifCii:::::@@@@@::::@                  lll@;    @.
  l   @@@@Lll:.::L@@@l@@C@L@@@:Ciii::::@  @@::::::                  @lli;
  l   @@@l@lll:i:l@@@@@Giii@@@@;i::::::   @l::::::                  @l;;@
  l   @@@@f@ll;lll@@@@@@@@@@@@Gii:::::    @l::::::                  @ll;;
  i   @@@@l@ttllll   @@@@     @i::::::    @l::::::                  @Lt;;
 ll   @@@@l@ll@ll@            @i::::::     l::::::                  @ll;
 @@   @@@@f@lLft@             @i:::::      l:::::                   Gll;
 G@   @@@@@ltif@l             @i:::::      l:::::                   @lGl
 @@  @@@@@@lll:l              @::::::      l:::::                   @ll;
@@@  @@@@@ lll::              @:,:::       l:::::                   lli;
@@@  ti@@@ lll::              i:::::       l:::::                   l@i;
 @@  tit@@ ll:::             fi.:::        l::::l                   ll;;
  @  iiti@ ll:::             @:.,:;        l::::;                   Ll;;
  @ @iiii@ fl:::             i:.;i@        l::::                    @l;;
@ @ tllii  Ll:::            @i:..;         l::ii                    @l;;
    iitii  Gl:::            i::;ti         li::l                    @l;;
   @ttiii  @l:::           @ii@@f          l::ll                    @l;;
   tiiii   @l:::          @i::l@@          l:ill                     t;;
  @tiiii   @l:::        @i::::t@           l::Cf                     l;L
  @ttiii   @l:::        G:::i@@            ll::l                    Cl;f
  @tttii  @l;:::        @:::ii@            fl:::                  @;;;L
  @@i@@i  @ll::l         i:ii@            @::::::                 @;;LL
    @@@   @llt@.          ,G:@            @l:,:;CC                ;LL
          @@@@.f                            @@@CC
-->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="description" content="<?php echo $description ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title id="head-title">Dylan Fisher</title>
  <link id="favicon" rel="icon" type="image/png" href="images/rainbow/rainbow<?php echo rand(0, 72); ?>.gif">
  <link rel="stylesheet" href="css/build/prefixed/application.css" type="text/css">
</head>
<body>
  <div id="wrapper" class="wrapper">
    <header>
      <div class="info">
        <h1>Dylan Fisher</h1>
        <h2><a href="mailto:hi@dylanfisher.com" target="_blank">hi@dylanfisher.com</a></h2>
      </div>
      <div id="weather" class="weather">
        <span class="location">NYC</span>
        <span id="date" class="date"></span>
        <span id="temperature" class="temperature"></span>
        <span id="icon" class="icon blue"></span>
      </div>
      <h2 class="github"><a class="github" href="https://github.com/dylanfisher" target="_blank">Github</a></h2>
      <h2 class="title">About</h2>
      <div>
         <p><?php echo $description ?></p>
      </div>
    </header>
    <h2 class="title">Work</h2>
    <ul class="project">
      <li>2017</li>
      <li><h3>Midnight Commercial</h3></li>
      <li><a href="http://midnightcommercial.com/" target="_blank">midnightcommercial.com</a></li>
      <li>with <a href="http://richardthe.com/" target="_blank">Richard The</a></li>
    </ul>
    <ul class="project">
      <li>2017</li>
      <li><h3>Seal Consulting</h3></li>
      <li><a href="http://sealconsulting.ch/" target="_blank">sealconsulting.ch</a></li>
      <li>with <a href="http://www.outthereww.com" target="_blank">Out There</a></li>
    </ul>
    <ul class="project">
      <li>2017</li>
      <li><h3>The Playlist Generation</h3></li>
      <li><a href="http://www.theplaylistgeneration.com/" target="_blank">theplaylistgeneration.com</a></li>
      <li>with <a href="http://www.outthereww.com" target="_blank">Out There</a></li>
    </ul>
    <ul class="project">
      <li>2017</li>
      <li><h3>Core Interaction at Parsons School of Design</h3></li>
      <li><a href="http://ci.nikasimovich.com/" target="_blank">ci.nikasimovich.com</a></li>
      <li>with <a href="http://nikasimovich.com" target="_blank">Nika Simovich</a></li>
    </ul>
    <ul class="project">
      <li>2017</li>
      <li><h3>Williams College Museum of Art</h3></li>
      <li><a href="https://wcma.williams.edu/" target="_blank">wcma.williams.edu</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2017</li>
      <li><h3>Wild Flowers</h3></li>
      <li><a href="http://wildflowers.garden/" target="_blank">wildflowers.garden</a></li>
      <li>with <a href="http://nikasimovich.com" target="_blank">Nika Simovich</a></li>
    </ul>
    <ul class="project divider">
      <li>&ndash;</li>
    </ul>
    <ul class="project">
      <li>2016</li>
      <li><h3>New Age Real Change</h3></li>
      <li><a href="http://newagerealchange.com/" target="_blank">newagerealchange.com</a></li>
      <li>with <a href="http://matthewboblet.com/" target="_blank">Matthew Boblet</a></li>
    </ul>
    <ul class="project">
      <li>2016</li>
      <li><h3>Pepi Ginsberg</h3></li>
      <li><a href="http://pepiginsberg.com/" target="_blank">pepiginsberg.com</a></li>
      <li>with <a href="http://matthewboblet.com/" target="_blank">Matthew Boblet</a></li>
    </ul>
    <ul class="project">
      <li>2016</li>
      <li><h3>Columbia Graduate School of Architecture, Planning and Preservation</h3></li>
      <li><a href="https://www.arch.columbia.edu" target="_blank">arch.columbia.edu</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2016</li>
      <li><h3>Columbia Books on Architecture and the City</h3></li>
      <li><a href="https://www.arch.columbia.edu/books" target="_blank">arch.columbia.edu/books</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project divider">
      <li>&ndash;</li>
    </ul>
    <ul class="project">
      <li>2015</li>
      <li><h3>Tang Museum</h3></li>
      <li><a href="https://tang.skidmore.edu" target="_blank">tang.skidmore.edu</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2015</li>
      <li><h3>Print and Screen</h3></li>
      <li><a href="http://printandscreen.org" target="_blank">printandscreen.org</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2015</li>
      <li><h3>Revisions – Zen for Film</h3></li>
      <li><a href="http://bgcdml.net/revisions/app" target="_blank">bgcdml.net/revisions/app</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2015</li>
      <li><h3>The Menil Collection</h3></li>
      <li><a href="https://www.menil.org/" target="_blank">menil.org</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2015</li>
      <li><h3>Sarah Walker</h3></li>
      <li><a href="http://sarahwalker.org/" target="_blank">sarahwalker.org</a></li>
      <li>with <a href="http://sarahwalker.org/" target="_blank">Sarah Walker</a></li>
    </ul>
    <ul class="project">
      <li>2015</li>
      <li><h3>Nika Simovich</h3></li>
      <li><a href="http://nikasimovich.com" target="_blank">nikasimovich.com</a></li>
      <li>with <a href="http://nikasimovich.com" target="_blank">Nika Simovich</a></li>
    </ul>
    <ul class="project">
      <li>2015</li>
      <li><h3>Legacy City Design</h3></li>
      <li><a href="http://www.legacycitydesign.org" target="_blank">legacycitydesign.org</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project divider">
      <li>&ndash;</li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>MFA Design for Social Innovation</h3></li>
      <li><a href="http://dsi.sva.edu" target="_blank">dsi.sva.edu</a></li>
      <li>with <a href="http://common-name.com" target="_blank">Common Name</a></li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>Out There</h3></li>
      <li><a href="http://www.outthereww.com" target="_blank">outthereww.com</a></li>
      <li>with <a href="http://www.outthereww.com" target="_blank">Out There</a></li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>Come Together: Surviving Sandy</h3></li>
      <li><a href="http://cometogethersandy.com" target="_blank">cometogethersandy.com</a></li>
      <li>with <a href="http://www.sethhoekstra.com" target="_blank">Seth Hoekstra</a></li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>Gandhi's Legacy: Houston Perspectives</h3></li>
      <li><a href="http://gandhislegacyhouston.org" target="_blank">gandhislegacyhouston.org</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>Aspen Art Museum</h3></li>
      <li><a href="https://www.aspenartmuseum.org" target="_blank">aspenartmuseum.org</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>Jeremy Liebman</h3></li>
      <li><a href="http://jeremyliebman.com" target="_blank">jeremyliebman.com</a></li>
      <li>with <a href="http://www.orderdisorder.com" target="_blank">David Lloyd Yun</a></li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>WAX Magazine</h3></li>
      <li><a href="http://www.readwax.com" target="_blank">readwax.com</a></li>
      <li>with <a href="http://chrisrypkema.com" target="_blank">Chris Rypkema</a> and <a href="http://www.readwax.com" target="_blank">WAX</a></li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>Banner Furniture</h3></li>
      <li><a href="http://www.bannerfurniture.com" target="_blank">bannerfurniture.com</a></li>
      <li>with <a href="http://laurelschwulst.com" target="_blank">Laurel Schwulst</a></li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>Field Notes from Tel Aviv</h3></li>
      <li>&nbsp;</li>
      <li>with <a href="http://othermeans.us" target="_blank">Other Means</a></li>
    </ul>
    <ul class="project">
      <li>2014</li>
      <li><h3>Buccellati microsite</h3></li>
      <li>&nbsp;</li>
      <li>with <a href="http://outthereww.com" target="_blank">Out There</a></li>
    </ul>
    <ul class="project divider">
      <li>&ndash;</li>
    </ul>
    <ul class="project">
      <li>2013</li>
      <li><h3>AO Public</h3></li>
      <li><a href="http://www.aopublic.com" target="_blank">aopublic.com</a></li>
      <li>with <a href="http://laurelschwulst.com" target="_blank">Laurel Schwulst</a></li>
    </ul>
    <ul class="project">
      <li>2013</li>
      <li><h3>Anoka Faruqee</h3></li>
      <li><a href="http://anokafaruqee.com" target="_blank">anokafaruqee.com</a></li>
      <li>with <a href="http://www.appliedaesthetics.org" target="_blank">Julian Bittiner</a></li>
    </ul>
    <ul class="project">
      <li>2013</li>
      <li><h3>Printed Matter</h3></li>
      <li><a href="http://printedmatter.org" target="_blank">printedmatter.org</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2013</li>
      <li><h3>Josie Ng</h3></li>
      <li>&nbsp;</li>
      <li>with <a href="http://josieng.com" target="_blank">Josie Ng</a></li>
    </ul>
    <ul class="project">
      <li>2013</li>
      <li><h3>Yale AIDS Memorial Project</h3></li>
      <li><a href="http://yamp.org" target="_blank">yamp.org</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2013</li>
      <li><h3>Brand New School</h3></li>
      <li>&nbsp;</li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2013</li>
      <li><h3>Whitney Museum of American Art</h3></li>
      <li><a href="http://whitney.org" target="_blank">whitney.org</a></li>
      <li>with <a href="http://linkedbyair.net" target="_blank">Linked by Air</a></li>
    </ul>
    <ul class="project">
      <li>2013</li>
      <li><h3>Urban Media Aesthetics</h3></li>
      <li>&nbsp;</li>
      <li>with <a href="http://www.tanyatoft.com" target="_blank">Tanya Toft</a></li>
    </ul>
    <ul class="project">
      <li>2013</li>
      <li><h3>Streaming Museum</h3></li>
      <li><a href="http://streamingmuseum.org" target="_blank">streamingmuseum.org</a></li>
      <li>with <a href="http://louisdoulas.info" target="_blank">Louis Doulas</a></li>
    </ul>
    <ul class="project divider">
      <li>&ndash;</li>
    </ul>
    <ul class="project">
      <li>2012</li>
      <li><h3>Nordic Outbreak</h3></li>
      <li><a href="http://nordicoutbreak.streamingmuseum.org/" target="_blank">nordicoutbreak.com</a></li>
      <li>with <a href="http://louisdoulas.info" target="_blank">Louis Doulas</a> and <a href="http://www.tanyatoft.com" target="_blank">Tanya Toft</a></li>
    </ul>

    <h2 class="title">Feed</h2>
    <div id="twitter-feed" class="twitter-feed"></div>
    <footer>
      <span class="blue">&#9996;</span>
    </footer>
  </div>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js"><\/script>')</script>
  <script src="js/build/application.min.js"></script>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-3376691-1', 'auto');
    ga('send', 'pageview');
  </script>
</body>
</html>
