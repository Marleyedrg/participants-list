var participant = [];

sortable_list();

$("#button").click(() => {
  let participant_datas = $("#name").val() + " " + $("#office").val() + " " + $("#entity").val() + " " + $("#local").val();

  participant.push(participant_datas);

  var listItem = $('<li>', {
    id: 'item-list-' + (participant.length - 1),
    text: participant_datas
  });

  var button = $('<button>', {
    text: '+',
    class: 'btn',
    focus: function() {
      sortable_list();
    }
  });

  button.appendTo(listItem);
  listItem.appendTo('#list');

  show_message();
});
//   ;)
// functions ---------------------------

function updateParticipantList() {
  var participantOrder = [];
  $("#list").find('li').each(function() {
    participantOrder.push($(this).text());
  });

  console.log("Ordem da lista salva:", participantOrder);

  // Vibra o celular
  vibrateDevice();
}

function updateParticipantOrder() {
  participant = [];
  $("#list").find('li').each(function() {
    participant.push($(this).text());
  });
}

function show_message() {
  if (participant.length == 0) {
    $("p").show();
  } else {
    $("p").hide();
  }
}

function sortable_list() {
  $("#list").sortable({
    connectWith: "#list",
    update: updateParticipantList,
    sortupdate: updateParticipantOrder
  });

  // Adicione o comportamento de arrastar e soltar usando eventos de toque
  $("#list li")
    .on("touchstart", function(event) {
      event.preventDefault();
      $(this).addClass("dragging");
    })
    .on("touchmove", function(event) {
      event.preventDefault();
      const touch = event.touches[0];
      const touchX = touch.pageX;
      const touchY = touch.pageY;
      $(this).css({
        position: "absolute",
        left: touchX + "px",
        top: touchY + "px"
      });
    })
    .on("touchend", function(event) {
      $(this).removeClass("dragging");
      $(this).css({
        position: "static",
        left: "auto",
        top: "auto"
      });
    });
}

// Função para vibrar o celular
function vibrateDevice() {
  // Verifica se o navegador suporta a API de vibração
  if ("vibrate" in navigator) {
    navigator.vibrate(100); // Vibra por 100 milissegundos
  }
}