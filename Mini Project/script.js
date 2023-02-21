//Creating the class
class Event{
    constructor(name, place, hours, chapter) {
      this.name=name;
      this.place=place;
      this.hours=hours;
      this.chapter=chapter;
      this.availableTickets= new Array();
    }
  }
  
  
  //Create my first instance
  
  let womenCodeFirstEvent = new Event("Understanding the Web Conten Accessibility Guidelines", "Online", "5:00 PM - 6:00 PM PST", "WWCode Boulder/Denver");
  
  //console.log(womenCodeFirstEvent);
  womenCodeFirstEvent.availableTickets.push("Tanya", "Mifrah", "Raquel");
  //console.log(womenCodeFirstEvent);
  
  let names = ['Job search', 'Networking', 'Basic Data Structures', 'Translation', 'Happy Hour'];
  
  function createInstance(array){
    let hours = "TBD";
    let places= "TBD";
    let chapters= "TBD";
    let results =[];
    for (let i=0; i<array.length; i++) {
      let name = array[i];
      let tempInstances = new Event(name, places, hours, chapters);
      results.push(tempInstances)
    }
    return results;
  }
  
  let inputHTML=createInstance(names);
  console.log(inputHTML)



document.addEventListener("DOMContentLoaded", () => {
    // Handler when the DOM is fully loaded
    let html = "";
    inputHTML.forEach((item) => {
      html += `<li><strong>${item.name}</strong><br>Where: ${item.places} | When: ${item.hours} | Chapter: ${item.chapters}</li><br>`;
    });
    document.getElementById("event").innerHTML = html;
  });