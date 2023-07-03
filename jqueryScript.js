var participant = [];

$("#list").sortable({
  connectWith: "#list",
  update: updateParticipantList,
  sortupdate: updateParticipantOrder
});

$("#button").click(() => {
  let participant_datas = $("#name").val() + " " + $("#office").val() + " " + $("#entity").val() + " " + $("#local").val();

  participant.push(participant_datas);

  $('<li>', {
    text: participant[participant.length - 1]
  }).appendTo('#list');

  show_message()
});

function updateParticipantList() 
{
  var participantOrder = [];
  $("#list").find('li').each(function() 
  {
    participantOrder.push($(this).text());
  });

  console.log("Ordem da lista salva:", participantOrder);
}

function updateParticipantOrder() 
{
  participant = [];
  $("#list").find('li').each(function() 
  {
    participant.push($(this).text());
  });
}

function show_message(){
  if (participant.length == 0) 
  {
  $("p").show();;  
  }
  else
  {
  $("p").hide();
  }
}