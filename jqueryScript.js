var participant = [];

sortable_list()

$("#button").click(() => {
  let participant_datas = $("#name").val() + " " + $("#office").val() + " " + $("#entity").val() + " " + $("#local").val();

  participant.push(participant_datas);

  var listItem = $('<li>', {
    id: 'item-list-' + (participant.length - 1),
    text: participant_datas
  });

  var button = $('<button>', {
    text: 'Clique Aqui',
    class: 'btn',
    focus: function() {
      sortable_list();
    }
  });

  button.appendTo(listItem);
  listItem.appendTo('#list');

  show_message();
});

// functions ---------------------------

function updateParticipantList() {
  var participantOrder = [];
  $("#list").find('li').each(function() {
    participantOrder.push($(this).text());
  });

  console.log("Ordem da lista salva:", participantOrder);
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
  
}