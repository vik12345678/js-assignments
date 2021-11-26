'use strict';

/*********************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : Please do not use loops! All tasks can be implmeneted using standard Array methods *
 *                                                                                           *
 *********************************************************************************************/

 
/**
 * Returns an index of the specified element in array or -1 if element is not found
 * 
 * @param {array} arr
 * @param {any} value
 * @return {number}
 * 
 * @example
 *    ['Ace', 10, true], 10    => 1 
 *    ['Array', 'Number', 'string'], 'Date'    => -1 
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
   let temp = arr.indexOf(value);
   return temp;
   //throw new Error('Not implemented');
}

/**
 * Generates an array of odd numbers of the specified length
 * 
 * @param {number} len
 * @return {array}
 * 
 * @example
 *    1 => [ 1 ] 
 *    2 => [ 1, 3 ] 
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
	  let temp = [];
  let tempfig = 1;
  for (let i=0; i<len; i++)
    {
      temp[i] = tempfig;
      tempfig = tempfig +2;
    }
  
  return temp;
  
 //  throw new Error('Not implemented');
}


/**
 * Returns the doubled array - elements of the specified array are repeated twice using original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]  
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => [] 
 */
function doubleArray(arr) {
	
	  let temparr = arr;
  let temp = arr.length
  for (let i = 0; i< temp; i++)
    {
      temparr[temp+i] = temparr[i];
      
    }
  return temparr;
  
  
  // throw new Error('Not implemented');
}


/**
 * Returns an array of positive numbers from the specified array in original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => [] 
 */
function getArrayOfPositives(arr) {
	  let temparr = [];
  let tempstep = 0;
  let temp = arr.length
  for (let i = 0; i< temp; i++)
    {
      if(arr[i] > 0 )
        {
      		temparr[tempstep] = arr[i];
      		tempstep = tempstep +1;
    
        }
    }
  return temparr;
  
  // throw new Error('Not implemented');
}

/**
 * Returns the array with strings only in the specified array (in original order)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */
function getArrayOfStrings(arr) {
	  let temparr = [];
  let tempstep = 0;
  let temp = arr.length;
  for (let i = 0; i< temp; i++)
    {
      if(isNaN(arr[i]))
        {
      		temparr[tempstep] = arr[i];
      		tempstep = tempstep +1;
    
        }
    }
  return temparr;
  
  // throw new Error('Not implemented');
}

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
	  let arrcheck = [false, 0, NaN, '', undefined];
  
  let temparr = [];
  let tempstep = 0;
  let temp = arr.length;
  for (let i = 0; i< temp; i++)
    {
      if((arrcheck.indexOf(arr[i]) < 0) && (!Number.isNaN(arr[i])))
        {
      		temparr[tempstep] = arr[i];
      		tempstep = tempstep +1;
    
        }
    }
  return temparr;
  
  // throw new Error('Not implemented');
}

/**
 * Returns the array of useprcase strings from the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
  let temparr = [];
  let tempsize = arr.length;
  for (let i = 0; i< tempsize; i++)
    {
      temparr[i] = arr[i].toUpperCase();
    }
  return temparr;
  
  // throw new Error('Not implemented');
}


/**
 * Returns the array of string lengths from the specified string array.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
	
	  let temparr = [];
  let tempsize = arr.length;
  for (let i = 0; i< tempsize; i++)
    {
      temparr[i] = arr[i].length;
    }
  return temparr;
  
  // throw new Error('Not implemented');
}

/**
 * Inserts the item into specified array at specified index
 * 
 * @param {array} arr
 * @param {any} item
 * @param {number} index 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
	
	  let temparr = [];
  let tempsize = arr.length;
    for (let i = 0; i< index; i++)
    {
      temparr[i] = arr[i];
    }
  
  temparr[index] = item;
  for (let i = index; i< tempsize; i++)
    {
      temparr[i+1] = arr[i];
    }
  return temparr;
  
  
  // throw new Error('Not implemented');
}

/**
 * Returns the n first items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
	
	  let temparr = [];
  for (let i = 0; i< n; i++)
    {
      temparr[i] = arr[i];
    }
  return temparr;
  
  // throw new Error('Not implemented');
}


/**
 * Returns the n last items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
	
	  let temparr = [];
  let tempsize = arr.length;
  let temp = 0;
  for (let i = n; i< tempsize; i++)
    {
      temparr[temp] = arr[i];
      temp = temp+1;
    }
  return temparr;
  
  // throw new Error('Not implemented');
}


/**
 * Returns CSV represebtation of two-dimentional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 * 
 * @param {array} arr
 * @return {string}
 * 
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ] 
 *           => 
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
	  let temparr = '';
  
  
  let tempsize = arr[0].length;
  let tempsizeDept = 0;
  
  while (arr[0][tempsizeDept] != undefined)
    {tempsizeDept = tempsizeDept +1;}
  
  
  for (let i0 = 0; i0<tempsizeDept-1; i0++)
    {
  		for (let i = 0; i<tempsize; i++)
    		{
      		temparr = temparr + arr[i0][i].toString() + ',';
    		}
      temparr = temparr + '\n';
    }

    return temparr;
	
   //throw new Error('Not implemented');
}

/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
	  let temparr = [];
  let tempsize = arr.length;

  for(let i = 0; i<tempsize; i++)
    {
      temparr[i] = arr[i]*arr[i];
      
    }

    return temparr;
	
   //throw new Error('Not implemented');
}


/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n] 
 *  or f[n] = f[n-1] + x[n]
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
	  let temparr = [];
  let tempsize = arr.length;
	let temp=0;
  
  for(let i = 0; i<tempsize; i++)
    {
      temp = temp+arr[i]
      temparr[i] =temp;
      
    }

    return temparr;
	
   //throw new Error('Not implemented');
}

/**
 * Returns every second item from the specified array:
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
	  let temparr = [];
  let tempsize = arr.length;
	let temp=0;
  
  for(let i = 1; i<tempsize; i=i+2)
    {
      temparr[temp] =arr[i];
      temp = temp+1;
      
    }

    return temparr;
   //throw new Error('Not implemented');
}


/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, tree third items etc. 
 * 
 * @param {array} arr 
 * @return {array}
 * 
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
	  let temparr = [];
  let tempsize = arr.length;
	let temp=0;
  let tempmass = 1;
  
  for(let i = 0; i<tempsize; i++)
    {
      for (let i2=0; i2<tempmass; i2++)
        {
      		temparr[temp] =arr[i];
		      temp = temp+1;
        }
      tempmass = tempmass+1;
    }

    return temparr;
	
   //throw new Error('Not implemented');
}


/** 
 * Returns the 3 largest numbers from the specified array
 * 
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
	let temparr = [];
  let tempsize = arr.length;
	let temp1;
	let temp2;
  let temp3;
  let tempindex1;
  let tempindex2;
  
  if (tempsize>0){
    
    temp1 = arr[0];
  	for(let i = 0; i<tempsize; i++)
    {
				if(arr[i]>temp1){temp1 = arr[i]; tempindex1 = i;}
    }
  }
  
  if (tempsize>1){
    temp2 = arr[0];
  	for(let i = 0; i<tempsize; i++)
    {
				if((arr[i]>temp2) && (i != tempindex1)){temp2 = arr[i]; tempindex2 = i;}
    }
  
  } 
  
  if (tempsize>2){
    temp3 = arr[0];
  	for(let i = 0; i<tempsize; i++)
    {
				if((arr[i]>temp3) && (i != tempindex1) && (i != tempindex2)){temp3 = arr[i]}
    }
  }
  
  
		if(temp1 != undefined) {temparr[0] = temp1};
  	if(temp2 != undefined) {temparr[1] = temp2};
  	if(temp3 != undefined) {temparr[2] = temp3};
  
    return temparr;
	
   //throw new Error('Not implemented');
}
 
 
/**  
 * Returns the number of positive numbers from specified array
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
	
	  let arrcheck = [false, 0, NaN, '', undefined, null];
      
  let temparr = [];
  let tempsize = arr.length;
	let temp = 0;
  
  for(let i = 0; i<tempsize; i++)
    {
			if((arrcheck.indexOf(arr[i]) < 0) && (!isNaN(arr[i])) && (arr[i] > 0) && (typeof arr[i] != "string"))
      
      {temp = temp + 1;}
      
    }
    
    
    
    return temp;
	
   //throw new Error('Not implemented');
}
 
/** 
 * Sorts digit names
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
	
	let arrfig = ['zero', 'one',	'two',	'three',	'four',	'five',	'six',	'seven',	'eight',	'nine'];   
  let temparr = [];
  let tempsize = arr.length;
	let temp = 0;
  
  for(let i = 0; i<tempsize; i++)
    {
			for(let i2 = 0; i2<11; i2++)
      {
        if (arr[i] == arrfig[i2]){temparr[temp] = i2; temp = temp+1;}
        
      }	  
    }
   
  let tempbool = true;
  
  while(tempbool)
  {
    tempbool = false;
    for(let i = 0; i<tempsize-1; i++)
    {
      if(temparr[i] > temparr[i+1])
          {
            let tempfig = temparr[i+1];
            temparr[i+1] = temparr[i];
            temparr[i] = tempfig;
            tempbool = true;
          }  
    }
  } 
  
    for(let i = 0; i<tempsize; i++)
    {
     	temparr[i] = arrfig[temparr[i]];
    } 
    return temparr
	
	
   //throw new Error('Not implemented');
}

/** 
 * Returns the sum of all items in the specified array of numbers
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
	  let temparr = [];
  let tempsize = arr.length;
	let temp = 0;
  
  for(let i = 0; i<tempsize; i++)
    {
			temp = temp + arr[i];
      
    } 
    return temp;
	
   //throw new Error('Not implemented');
}
 
/** 
 * Returns the number of all falsy value in the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
		let arrcheck = [null, undefined, NaN, false, 0, ''];
  
  let temparr = [];
  let tempstep = 0;
  let temp = arr.length;
  for (let i = 0; i< temp; i++)
    {
      if((arrcheck.indexOf(arr[i]) > 0) || (Number.isNaN(arr[i])) || (arr[i] == null))
        {
      		tempstep = tempstep +1;
        }
    }
  return tempstep;
  
  // throw new Error('Not implemented');
}

/**
 * Returns a number of all occurences of the specified item in an array  
 * 
 * @param {array} arr
 * @param {any} item 
 * @return {number}
 * 
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2 
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurences(arr, item) {
	

  let temp = arr.length;
  for (let i = 0; i< temp; i++)
    {
      if ((arr[i] == item) && (typeof arr[i] == typeof item))
      
      		tempstep = tempstep +1;
    }
  return tempstep;
  
  
   throw new Error('Not implemented');
}

/**
 * Concatenates all elements from specified array into single string with ',' delimeter  
 * 
 * @param {array} arr 
 * @return {string}
 * 
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
	
	  let temp = '';
  let tempsize = arr.length;
  for (let i = 0; i< tempsize; i++)
    {
			if (temp != ''){temp = temp + ","}
      temp = temp + String(arr[i]);
    }
  return temp;
  
  // throw new Error('Not implemented');
}


/**
 * Sorts the specified array by country name first and city name (if countries are equal) in ascending order.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]  
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */
function sortCitiesArray(arr) {
	 let temp = arr;
  let tempsize = arr.length;
  let tempbool = true;
  
  while(tempbool)
    {
      tempbool = false;
      for (let i = 0; i< tempsize-1; i++)
        {
          if (temp[i].country[0] > temp[i+1].country[0])
            {
              let temptemp = temp[i+1];
              temp[i+1] = temp[i];
              temp[i] = temptemp;
              tempbool = true;
            }
          
        }
      
    }
  tempbool = true;
  
    while(tempbool)
    {
      tempbool = false;
      for (let i = 0; i< tempsize-1; i++)
        {
          if ((temp[i].country[0] == temp[i+1].country[0]) && (temp[i].city[0] > temp[i+1].city[0]))
            {
              let temptemp = temp[i+1];
              temp[i+1] = temp[i];
              temp[i] = temptemp;
              tempbool = true;
            }
          
        }
      
    }

  return temp;
  
  // throw new Error('Not implemented');
}

/**
 * Creates an indentity matrix of the specified size
 * 
 * @param {number} n
 * @return {array}
 * 
 * @example
 *     1  => [[1]]
 *  
 *     2 => [[1,0],
 *           [0,1]]
 * 
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]   
 */
function getIdentityMatrix(n) {
	  var temp = new Array(n);
	let tempfig = 0;
  
	for (let i = 0; i<n; i++)
    {
      temp [i] = new Array(n);
      for (let i2 = 0; i2<n; i2++)
      {
        temp[i][i2] = 0
       }
	   }

	for (let i = 0; i<n; i++)
    {
       temp[i][tempfig] = 1;
      tempfig = tempfig+1;
      
    }
  
  return temp;
  
  // throw new Error('Not implemented');
}

/**
 * Creates an array of integers from the specified start to end (inclusive)
 * 
 * @param {number} start
 * @param {number} end
 * @return {array}
 * 
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
   throw new Error('Not implemented');
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
   throw new Error('Not implemented');
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ], 
 *     item => item.country, 
 *     item => item.city
 *   )
 *            => 
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"], 
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
   throw new Error('Not implemented');
}


/**
 * Projects each element of the specified array to a sequence and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element that returns an array of children
 * @return {array}
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
    throw new Error('Not implemented');
}


/**
 * Returns an element from the multidimentional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0]) 
 *   ['one','two','three'], [2]       => 'three'  (arr[2]) 
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
    throw new Error('Not implemented');
}


/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start. 
 * The middle element (if exists) leave on the same position.
 * 
 *  
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/         
 *     head     tail 
 *
 *   [ 1, 2 ]  => [ 2, 1 ] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]   
 * 
 */
function swapHeadAndTail(arr) {
    throw new Error('Not implemented');
}


module.exports = {
    findElement: findElement,
    generateOdds: generateOdds,
    doubleArray: doubleArray,
    getArrayOfPositives: getArrayOfPositives,
    getArrayOfStrings: getArrayOfStrings,
    removeFalsyValues: removeFalsyValues,
    getUpperCaseStrings: getUpperCaseStrings,
    getStringsLength: getStringsLength,
    insertItem: insertItem,
    getHead: getHead,
    getTail: getTail,
    toCsvText: toCsvText,
    toStringList: toStringList,
    toArrayOfSquares: toArrayOfSquares,
    getMovingSum: getMovingSum,
    getSecondItems: getSecondItems,
    propagateItemsByPositionIndex: propagateItemsByPositionIndex,
    get3TopItems: get3TopItems,
    getPositivesCount: getPositivesCount,
    sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
    getItemsSum: getItemsSum,
    getFalsyValuesCount: getFalsyValuesCount,
    findAllOccurences: findAllOccurences,
    sortCitiesArray: sortCitiesArray,
    getIdentityMatrix: getIdentityMatrix,
    getIntervalArray: getIntervalArray,
    distinct: distinct,
    group: group,
    selectMany: selectMany,
    getElementByIndexes: getElementByIndexes,
    swapHeadAndTail: swapHeadAndTail
};
