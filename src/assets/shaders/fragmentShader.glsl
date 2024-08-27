#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform vec3 u_colorC;

varying vec2 vUv;

/**
 * Fractal Brownian Motion
 *
 * Reference: https://thebookofshaders.com/13/
 * 
 * See also: https://iquilezles.org/articles/morenoise
 *         : https://iquilezles.org/articles/warp
 */

#define NUM_OCTAVES 10

// Get random value
float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Get noise
float noise(vec2 st)
{
    vec2 i = floor(st);
    vec2 f = fract(st);
    
    float a = random(i + vec2(0.0, 0.0));
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Fractal Brownian Motion
//
float fbm(vec2 st)
{
	float v = 0.0;
    float a = 0.5;
    
    for (int i = 0; i < NUM_OCTAVES; i++)
    {
    	v += a * noise(st);
        st = st * 0.99;
        a *= 0.69;
    }
    
    return v;
}
// End of Fractal Brownian Motion Code

void main()
{
    vec2 st = (vUv * 0.8);
    
    vec3 color = vec3(0.0);
        
    vec2 q = vec2(0.0);
    q.x = fbm(st + vec2(0.0) + (0.15 * u_time));
    q.y = fbm(st + vec2(1.0) + (0.15 * u_time));
    
    vec2 r = vec2(0.0);
    r.y = fbm(st + (4.0 * q) + vec2(2.3, 2.8) + (0.15 * u_time) * (sin(u_mouse.y * 0.0005)));
    
    vec2 s = vec2(0.0);
    s.x = fbm(st + (4.0 * q) + vec2(1.7, 2.2) + (0.15 * u_time) * (sin(u_mouse.x * 0.0005)));
    
    color = mix(color, u_colorA, clamp(length(q), 0.0, 1.0));
    color = mix(color, u_colorB, clamp(length(r), 0.0, 1.0));
    color = mix(color, u_colorC, clamp(length(s), 0.0, 1.0));

    float f = fbm(st + 4.0 * r);
    
    float coef = (f * f * f + (0.6 * f * f) + (0.5 * f));
    color *= coef;
    
    gl_FragColor = vec4(color, 1.0);
}