google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(LoadChart);

function LoadChart() {
  $.get('/Students?format=true?format=json', drawChart)
}

function drawChart(d) {

  d = [['Estudiantes', 'Cursos'], ... d.map(r => { return [r.FullName, r.TotalEnrollments]})];
  var data = google.visualization.arrayToDataTable(d);

  var options = {
    title: 'Cursos por estudiantes'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}