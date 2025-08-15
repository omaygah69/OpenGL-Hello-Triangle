#version 330 core
out vec4 FragColor;  
in vec3 Kulay;
  
void main()
{
    FragColor = vec4(Kulay, 1.0);
}
