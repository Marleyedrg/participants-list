const fields = []
$(".form input").each(function () {
    let id = this.id;
    fields.push(id); 
});

function checksData() {
    let participant_datas = '';

    const limit = fields.length;
    fields
  
    for (let i = 0, fieldValue; i < limit; i++) {

      fieldValue = $(`#${fields[i]}`).val();
      
      if (fieldValue) {
        participant_datas += fieldValue + " ";

        //delete the value of the form inputs
        $(`#${fields[i]}`).val('');
      }
    }
    return participant_datas.trimEnd();
  }

  