var imageArray = [
    "http://www.gatesmillsvillage.com/sites/default/files/christmas%20tree.jpg",
    "http://www.pixelstalk.net/wp-content/uploads/2015/01/Snow-Background.jpg",
    "http://www.durangotrain.com/sites/default/files/images/PEX11_logo-horz.jpg"
    ];
var imageArrayTwo = [
    "https://cdn.drawception.com/images/panels/2016/7-28/FmkBxBNg56-12.png",
    "https://s-media-cache-ak0.pinimg.com/236x/c3/10/e8/c310e8de0556424c4965964101a9a6bc.jpg"
    ];
var currentIndex = 0;
    
    function renderImage(){
        if (currentIndex < 0){
            currentIndex = imageArray.length - 1;
        }
        else if (currentIndex >= imageArray.length){
            currentIndex = 0;
        }
        $('#photo1').attr('src', imageArray[currentIndex])
    }
    renderImage();

var currentIndexTree = 0;
    function renderTree(){
        if (currentIndexTree < 0){
            currentIndexTree = imageArrayTwo.length - 1;
        }
        else if (currentIndexTree >= imageArrayTwo.length){
            currentIndexTree = 0;
        }
        $('#christmasDayPhoto').attr('src', imageArrayTwo[currentIndexTree])
    }
    renderTree();

    function treeUpgrade (){
        currentIndexTree++;
        renderTree();
    }
    $('.upgradeButton').on('click', treeUpgrade);

    function fowardImage(){
        currentIndex++;
        renderImage();
    }

    function backImage(){
        currentIndex--;
        renderImage();
    }
    $('.upgradeButton').click(function(){
        var $this = $(this);
        $this.toggleClass('button2');
        if($this.hasClass('button2')){
            $this.text('Upgrade!');         
        } else {
            $this.text('Downgrade...');
        }
    });

    $('#fowardButton').on('click', fowardImage);
    $('#backButton').on('click', backImage);
var name = prompt("What is your name?");
var outputString = "Merry Christmas, " + name + "!";
$('h1').html(outputString);

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Charts', 'Amount of Times I Have Used This Chart',],
        ['Bar Chart', 1],
        ['Any Other Chart', 0]
      ]);

      var options = {
        title: 'Charts Used on Christmas Cards',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Amount of Uses',
          minValue: 0
        },
        vAxis: {
          title: 'Chart'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }