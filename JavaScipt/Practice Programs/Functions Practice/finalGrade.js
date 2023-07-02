// Write your function here:

function finalGrade(m1, m2, m3) {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
      return 'You have entered an invalid grade.';
    }
    avg = (m1+m2+m3)/3;
    if(avg>=0 && avg <=59)
    return 'F';
    else if(avg>=60 && avg <=69)
    return 'D';
    else if(avg>=70 && avg <=79)
    return 'C';
    else if(avg>=80 && avg <=89)
    return 'B';
    else if(avg>=90 && avg <=99)
    return 'A';
  }
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!