"use strict";
var data = require("./data");

function findDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    if (obj[arr[i]] != null) {
      if (!obj[arr[i]]) {
        out.push(arr[i]);
        obj[arr[i]] = 1;
      }
    } else {
      obj[arr[i]] = 0;
    }
  }
  return out;
}

function printDuplicates(data) {
  var students = [];

  data.forEach(function(entry) {
    students.push(entry.fields.student);
  });

  var duplicates = findDuplicates(students);

  data.forEach(function(entry) {
    if(entry.fields.student === duplicates[0]) {
      console.log(entry);
      duplicates.shift();
    }
  });
}

printDuplicates(data);
