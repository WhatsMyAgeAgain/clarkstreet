window.onload = function () {
  setCategories();
}

function setCategories() {
  $.getJSON("resources/categories.json", function (data, status) {
    data.forEach(c => addButton(c));
  });
}

function addButton(category) {
  var buttons = document.getElementById("buttons");
  var btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.innerHTML = category.desc;
  btn.style.backgroundColor = category.color;
  btn.style.border = "none";
  btn.onclick = function () { getQuestion(category.id) }
  buttons.appendChild(btn);
}

function getQuestion(category) {
  $.getJSON("resources/categories.json", function (data, status) {
    gtag("event", "Select", {
      event_category: "Question",
      event_label: data.find(c => c.id == category).desc
    });
    getRandomQuestion(category, function (question) {
      document.getElementById("question").innerHTML = question.q;
    });
  });
}

function getRandomQuestion(categoryId, callback) {
  $.getJSON("resources/questions.json", function (data, status) {
    let validQuestions = data.filter(q => q.c_id == categoryId);
    let q = getRandomObject(validQuestions, []);
    callback(q);
  });
}

function getRandomObject(objs, exclusions) {
  var rand = objs[getRandomInt(0, objs.length - 1)];
  if (exclusions == undefined) {
    return rand;
  } else {
    while (exclusions.includes(rand)) {
      rand = objs[getRandomInt(0, objs.length - 1)];
    }
    return rand;
  }
}

function getRandomInt(lowBound, highBound, exclusions) {
  var rand = Math.floor(Math.random() * (highBound - lowBound + 1)) + lowBound;
  if (exclusions == undefined) {
    return rand;
  } else {
    while (exclusions.includes(rand)) {
      rand = Math.floor(Math.random() * (highBound - lowBound + 1)) + lowBound;
    }
    return rand;
  }
}
