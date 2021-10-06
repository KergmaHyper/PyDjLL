function Person(first, last, age, gender, interests){
    this.name = {
                first: first,
                last: last
                };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.title = (this.gender === 'female')?'She':'He';
    this.bio = function(){
                alert(this.name.first + ' ' + this.name.last + ' ' + this.age + ' year old. ' + this.gender +
                '. '+ this.title +' interests: ' + this.interests.join(' ,') + '.');
    }
    this.greeting = function(){
                alert('Hello! I\'m - ' + this.name.first + '.');
    }

}
