jQuery.noConflict();
(function($) {
  function readyFn() {
    $(".ui.button").on("click", function() {
      $(".sidebar").sidebar("toggle");
    });
    $(".ui .item").on("click", function() {
      $(".sidebar").sidebar("toggle");
    });

    $("#search").on("click", function() {
      $("#content").load("search.html #search-content", function() {
        let content = [
          { category: "Bulgaria", title: "Sofia" },
          { category: "Bulgaria", title: "Varna" },
          { category: "Bulgaria", title: "Burgas" },
          { category: "Bulgaria", title: "Pazardjik" },
          { category: "Bulgaria", title: "Plovdiv" },
          { category: "Bulgaria", title: "Pernik" },
          { category: "Bulgaria", title: "Razgrad" },
          { category: "Bulgaria", title: "Ruse" },
          { category: "Bulgaria", title: "Popovo" },
          { category: "Romania", title: "Bucuresti" },
          { category: "Belgium", title: "Brussels" },
          { category: "Germany", title: "Frankfurt" },
          { category: "Netherlands", title: "Roterdam" }
        ];
        $(".ui.search").search({
          type: "category",
          source: content,
          fullTextSearch: false
        });
      });
    });

    $("#calendar").on("click", function() {
      $("#content").load("calendar.html #calendar-content", function() {
        $("#example1").calendar({
          inline: true,
          today: true,
          firstDayOfWeek: 1,
          closable: true,
          text: {
            days: ["Н", "П", "В", "С", "Ч", "П", "С"],
            months: [
              "Януари",
              "Февруари",
              "Март",
              "Април",
              "Май",
              "Юни",
              "Юли",
              "Август",
              "Септември",
              "Октомври",
              "Ноември",
              "Декември"
            ],
            monthsShort: [
              "Яну",
              "Февр",
              "Март",
              "Апр",
              "Май",
              "Юни",
              "Юли",
              "Авг",
              "Септ",
              "Окт",
              "Ное",
              "Дек"
            ],
            today: "Днес",
            now: "Този момент"
          }
        });
      });
    });

    $("#table").on("click", function() {
      $("#content").load("table.html #table-content", function() {
        $.get({ url: `https://api.github.com/users/MartinPenev/repos` })
          .then(response => {
            response.forEach(function(repo) {
              $("table").append(`
                <tr>
                  <td class="collapsing"><i class="id card icon"></i>ID: ${
                    repo["id"]
                  } </td>
                  <td>${repo["description"]}</td>
                  <td class="right aligned collapsing"><i class="calendar check icon"></i> ${
                    repo["created_at"]
                  }</td>
                </tr>`);
            });
          })
          .catch(err => console.log(err.message));
      });
    });
  }

  $(document).ready(readyFn);
})(jQuery);
