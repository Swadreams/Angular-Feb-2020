# AngularCourseManagement

# To Run the project follow instractions given at 
  https://github.com/Swadreams/Angular-Feb-2020/blob/master/README.md


# How to add Bootstrap in project
 1. npm install bootstrap
 2. copy relative path of bootstrap.css by locating bootstrap folder inside node_modules
 3. Goto angular.json
 4. Paste relative path in styles array of build object
    "node_modules/bootstrap/dist/css/bootstrap.css",
 5. Similarly do for font-awesome
  "node_modules/font-awesome/css/font-awesome.css",


# Creating a Component (ng g c comp_name) [Home.Component] 
 6. Created Home Component (ng g c Home)
 7. Updated Html file, css files as per visual requirement.

# Created Course Module ()
 8. ng g m course

# Creating another component [CourseList.Component]
 9. Created Course List Component
 10. Exported course list component by adding it into the exports array of course.module
 11. Used it into the App.component.html
 12. Created table structure in course-list.component
 13. Added data into the courses variable
 14. Iterated courses on course-list.component.html
 15. Applied different pipes to the varius fields.

# Creating Reusable Component
  16. Create Star Componet (ng g c shared/star)
  17. Added input and output properties
  18. Emmited and events to parent component
