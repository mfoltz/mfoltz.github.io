document.addEventListener('DOMContentLoaded', function() {
  if (typeof $.fn.dataTable === 'undefined') {
    console.error('DataTables is not loaded');
    return;
  }

  // this renders the datatable with reasonable defaults
  $('html').each(function() {
    $(this).addClass('dark');
  });
  // Add DataTable to each table
  $('table').each(function() {
    console.log('Processing table:', this);
    var $table = $(this);
    var source = $table.data('source');
    var total = $table.data('total');

    var options = {
      paging: true,
      searching: true,
      ordering: false,
      info: true,
      lengthChange: true,
      pageLength: 10,
      language: {
        search: "Search:"
      },
      layout:{
        topStart:{
          pageLength:{
            menu: [10, 20, 50, 100, 200]
          }
        }
      }
    };

    if (source) {
      options.lengthChange = false;
      options.pageLength = 100;
      options.serverSide = true;
      options.processing = true;
      options.deferRender = true;
      options.ajax = function(data, callback) {
        var page = Math.floor(data.start / options.pageLength);
        fetch(source + '_' + page + '.json')
          .then(function(resp) { return resp.json(); })
          .then(function(json) {
            callback({
              data: json,
              recordsTotal: total,
              recordsFiltered: total
            });
          });
      };
      options.columns = [
        {
          data: 0,
          render: function(data, type) {
            if (type === 'display') {
              return '<a href="/prefabs/' + data + '"><b>' + data + '</b></a>';
            }
            return data;
          }
        },
        { data: 1 }
      ];
    }

    new DataTable(this, options);
  });
});

