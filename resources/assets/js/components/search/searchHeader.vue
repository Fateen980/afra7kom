<template>

    <div>

    <h4 class="filterable-heading has-icon mt-0">
    <span class="icon"><img src="/img/lesson-type.svg" alt="Skill Type Icon"></span>
    Fateen
    </h4>


        <div class="ais-refinement-list__item">
        <label class="filterable-label" >
            <input type="checkbox" value="{{name}}"  {{#isRefined}}checked{{/isRefined}}>
            <a href="#" >{{name}}</a>
            <span class="ais-refinement-list__count">{{count}}</span></label>
       </div>


    </div>



</template>