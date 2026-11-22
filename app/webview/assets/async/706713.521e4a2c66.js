export const __rspack_esm_ids=[706713];export const __webpack_modules__={Ipng(e,t,r){let n,i;r.d(t,{N:()=>N});var a=r("unhp"),o=r("zd8w"),s=r("PVZC"),l=r("hPwS");let d=new s.NRn,u=new s.Pq0;class c extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(r,3,0)),this.setAttribute("instanceEnd",new s.eHs(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new s.LuO(r,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(n,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),d.setFromBufferAttribute(t),this.boundingBox.union(d))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)u.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(u)),u.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(u));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var p=r("STXV");let f=parseInt("179".replace(/\D+/g,""));class m extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([p.UniformsLib.common,p.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${f>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=f>=125?"uv1":"uv2",v=new s.IUQ,x=new s.Pq0,g=new s.Pq0,b=new s.IUQ,y=new s.IUQ,w=new s.IUQ,S=new s.Pq0,M=new s.kn4,E=new s.cZY,A=new s.Pq0,_=new s.NRn,L=new s.iyt,P=new s.IUQ;function k(e,t,r){return P.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),P.multiplyScalar(1/P.w),P.x=i/r.width,P.y=i/r.height,P.applyMatrix4(e.projectionMatrixInverse),P.multiplyScalar(1/P.w),Math.abs(Math.max(P.x,P.y))}class j extends s.eaF{constructor(e=new c,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)x.fromBufferAttribute(t,e),g.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+x.distanceTo(g);let i=new s.LuO(n,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(i,1,1)),this}raycast(e,t){let r,a,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let d=void 0!==e.params.Line2&&e.params.Line2.threshold||0;n=e.ray;let u=this.matrixWorld,c=this.geometry,p=this.material;if(i=p.linewidth+d,null===c.boundingSphere&&c.computeBoundingSphere(),L.copy(c.boundingSphere).applyMatrix4(u),o)r=.5*i;else{let e=Math.max(l.near,L.distanceToPoint(n.origin));r=k(l,e,p.resolution)}if(L.radius+=r,!1!==n.intersectsSphere(L)){if(null===c.boundingBox&&c.computeBoundingBox(),_.copy(c.boundingBox).applyMatrix4(u),o)a=.5*i;else{let e=Math.max(l.near,_.distanceToPoint(n.origin));a=k(l,e,p.resolution)}_.expandByScalar(a),!1!==n.intersectsBox(_)&&(o?function(e,t){let r=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,d=Math.min(a.instanceCount,o.count);for(let a=0;a<d;a++){E.start.fromBufferAttribute(o,a),E.end.fromBufferAttribute(l,a),E.applyMatrix4(r);let d=new s.Pq0,u=new s.Pq0;n.distanceSqToSegment(E.start,E.end,u,d),u.distanceTo(d)<.5*i&&t.push({point:u,pointOnLine:d,distance:n.origin.distanceTo(u),object:e,face:null,faceIndex:a,uv:null,[h]:null})}}(this,t):function(e,t,r){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,d=e.geometry,u=d.attributes.instanceStart,c=d.attributes.instanceEnd,p=Math.min(d.instanceCount,u.count),f=-t.near;n.at(1,w),w.w=1,w.applyMatrix4(t.matrixWorldInverse),w.applyMatrix4(a),w.multiplyScalar(1/w.w),w.x*=o.x/2,w.y*=o.y/2,w.z=0,S.copy(w),M.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<p;t++){if(b.fromBufferAttribute(u,t),y.fromBufferAttribute(c,t),b.w=1,y.w=1,b.applyMatrix4(M),y.applyMatrix4(M),b.z>f&&y.z>f)continue;if(b.z>f){let e=b.z-y.z,t=(b.z-f)/e;b.lerp(y,t)}else if(y.z>f){let e=y.z-b.z,t=(y.z-f)/e;y.lerp(b,t)}b.applyMatrix4(a),y.applyMatrix4(a),b.multiplyScalar(1/b.w),y.multiplyScalar(1/y.w),b.x*=o.x/2,b.y*=o.y/2,y.x*=o.x/2,y.y*=o.y/2,E.start.copy(b),E.start.z=0,E.end.copy(y),E.end.z=0;let d=E.closestPointToPointParameter(S,!0);E.at(d,A);let p=s.cj9.lerp(b.z,y.z,d),m=p>=-1&&p<=1,v=S.distanceTo(A)<.5*i;if(m&&v){E.start.fromBufferAttribute(u,t),E.end.fromBufferAttribute(c,t),E.start.applyMatrix4(l),E.end.applyMatrix4(l);let i=new s.Pq0,a=new s.Pq0;n.distanceSqToSegment(E.start,E.end,a,i),r.push({point:a,pointOnLine:i,distance:n.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class z extends c{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class C extends j{constructor(e=new z,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let N=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:r,linewidth:n,lineWidth:i,segments:d,dashed:u,...p},f){var h,v;let x=(0,l.C)(e=>e.size),g=o.useMemo(()=>d?new j:new C,[d]),[b]=o.useState(()=>new m),y=(null==r||null==(h=r[0])?void 0:h.length)===4?4:3,w=o.useMemo(()=>{let n=d?new c:new z,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=0xffffff;let e=r.map(e=>e instanceof s.Q1f?e.toArray():e);n.setColors(e.flat(),y)}return n},[e,d,r,y]);return o.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),o.useLayoutEffect(()=>{u?b.defines.USE_DASH="":delete b.defines.USE_DASH,b.needsUpdate=!0},[u,b]),o.useEffect(()=>()=>{w.dispose(),b.dispose()},[w]),o.createElement("primitive",(0,a.A)({object:g,ref:f},p),o.createElement("primitive",{object:w,attach:"geometry"}),o.createElement("primitive",(0,a.A)({object:b,attach:"material",color:t,vertexColors:!!r,resolution:[x.width,x.height],linewidth:null!=(v=null!=n?n:i)?v:1,dashed:u,transparent:4===y},p)))})},mevF(e,t,r){let n,i;var a=r("unhp"),o=r("zd8w"),s=r("CE87"),l=r("PVZC"),d=r("hPwS");let u=new l.Pq0,c=new l.Pq0,p=new l.Pq0,f=new l.I9Y;function m(e,t,r){let n=u.setFromMatrixPosition(e.matrixWorld);n.project(t);let i=r.width/2,a=r.height/2;return[n.x*i+i,-(n.y*a)+a]}let h=e=>1e-10>Math.abs(e)?0:e;function v(e,t,r=""){let n="matrix3d(";for(let r=0;16!==r;r++)n+=h(t[r]*e.elements[r])+(15!==r?",":")");return r+n}let x=(n=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>v(e,n)),g=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>v(e,i(t),"translate(-50%,-50%)")),b=o.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:i,center:v,fullscreen:b,portal:y,distanceFactor:w,sprite:S=!1,transform:M=!1,occlude:E,onOcclude:A,castShadow:_,receiveShadow:L,material:P,geometry:k,zIndexRange:j=[0x1000037,0],calculatePosition:z=m,as:C="div",wrapperClass:N,pointerEvents:B="auto",...I},T)=>{let{gl:U,camera:R,scene:D,size:O,raycaster:W,events:F,viewport:H}=(0,d.C)(),[$]=o.useState(()=>document.createElement(C)),V=o.useRef(null),q=o.useRef(null),G=o.useRef(0),K=o.useRef([0,0]),Y=o.useRef(null),Z=o.useRef(null),Q=(null==y?void 0:y.current)||F.connected||U.domElement.parentNode,J=o.useRef(null),X=o.useRef(!1),ee=o.useMemo(()=>{var e;return E&&"blending"!==E||Array.isArray(E)&&E.length&&(e=E[0])&&"object"==typeof e&&"current"in e},[E]);o.useLayoutEffect(()=>{let e=U.domElement;E&&"blending"===E?(e.style.zIndex=`${Math.floor(j[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[E]),o.useLayoutEffect(()=>{if(q.current){let e=V.current=s.createRoot($);if(D.updateMatrixWorld(),M)$.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=z(q.current,R,O);$.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Q&&(i?Q.prepend($):Q.appendChild($)),()=>{Q&&Q.removeChild($),e.unmount()}}},[Q,M]),o.useLayoutEffect(()=>{N&&($.className=N)},[N]);let et=o.useMemo(()=>M?{position:"absolute",top:0,left:0,width:O.width,height:O.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:v?"translate3d(-50%,-50%,0)":"none",...b&&{top:-O.height/2,left:-O.width/2,width:O.width,height:O.height},...r},[r,v,b,O,M]),er=o.useMemo(()=>({position:"absolute",pointerEvents:B}),[B]);o.useLayoutEffect(()=>{var t,i;X.current=!1,M?null==(t=V.current)||t.render(o.createElement("div",{ref:Y,style:et},o.createElement("div",{ref:Z,style:er},o.createElement("div",{ref:T,className:n,style:r,children:e})))):null==(i=V.current)||i.render(o.createElement("div",{ref:T,style:et,className:n,children:e}))});let en=o.useRef(!0);(0,d.D)(e=>{if(q.current){R.updateMatrixWorld(),q.current.updateWorldMatrix(!0,!1);let e=M?K.current:z(q.current,R,O);if(M||Math.abs(G.current-R.zoom)>t||Math.abs(K.current[0]-e[0])>t||Math.abs(K.current[1]-e[1])>t){var r;let t,n,i,a,o=(r=q.current,t=u.setFromMatrixPosition(r.matrixWorld),n=c.setFromMatrixPosition(R.matrixWorld),i=t.sub(n),a=R.getWorldDirection(p),i.angleTo(a)>Math.PI/2),s=!1;ee&&(Array.isArray(E)?s=E.map(e=>e.current):"blending"!==E&&(s=[D]));let d=en.current;s?en.current=function(e,t,r,n){let i=u.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),f.set(a.x,a.y),r.setFromCamera(f,t);let o=r.intersectObjects(n,!0);if(o.length){let e=o[0].distance;return i.distanceTo(r.ray.origin)<e}return!0}(q.current,R,W,s)&&!o:en.current=!o,d!==en.current&&(A?A(!en.current):$.style.display=en.current?"block":"none");let m=Math.floor(j[0]/2),v=E?ee?[j[0],m]:[m-1,0]:j;if($.style.zIndex=`${function(e,t,r){if(t instanceof l.ubm||t instanceof l.qUd){let n=u.setFromMatrixPosition(e.matrixWorld),i=c.setFromMatrixPosition(t.matrixWorld),a=n.distanceTo(i),o=(r[1]-r[0])/(t.far-t.near),s=r[1]-o*t.far;return Math.round(o*a+s)}}(q.current,R,v)}`,M){let[e,t]=[O.width/2,O.height/2],r=R.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:i,left:a,bottom:o,right:s}=R,l=x(R.matrixWorldInverse),d=n?`scale(${r})translate(${h(-(s+a)/2)}px,${h((i+o)/2)}px)`:`translateZ(${r}px)`,u=q.current.matrixWorld;S&&((u=R.matrixWorldInverse.clone().transpose().copyPosition(u).scale(q.current.scale)).elements[3]=u.elements[7]=u.elements[11]=0,u.elements[15]=1),$.style.width=O.width+"px",$.style.height=O.height+"px",$.style.perspective=n?"":`${r}px`,Y.current&&Z.current&&(Y.current.style.transform=`${d}${l}translate(${e}px,${t}px)`,Z.current.style.transform=g(u,1/((w||10)/400)))}else{let t=void 0===w?1:function(e,t){if(t instanceof l.qUd)return t.zoom;if(!(t instanceof l.ubm))return 1;{let r=u.setFromMatrixPosition(e.matrixWorld),n=c.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*r.distanceTo(n))}}(q.current,R)*w;$.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}K.current=e,G.current=R.zoom}}if(!ee&&J.current&&!X.current)if(M){if(Y.current){let e=Y.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=R;if(t||k)I.scale&&(Array.isArray(I.scale)?I.scale instanceof l.Pq0?J.current.scale.copy(I.scale.clone().divideScalar(1)):J.current.scale.set(1/I.scale[0],1/I.scale[1],1/I.scale[2]):J.current.scale.setScalar(1/I.scale));else{let t=(w||10)/400,r=e.clientWidth*t,n=e.clientHeight*t;J.current.scale.set(r,n,1)}X.current=!0}}}else{let t=$.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/H.factor,r=t.clientWidth*e,n=t.clientHeight*e;J.current.scale.set(r,n,1),X.current=!0}J.current.lookAt(e.camera.position)}});let ei=o.useMemo(()=>({vertexShader:M?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[M]);return o.createElement("group",(0,a.A)({},I,{ref:q}),E&&!ee&&o.createElement("mesh",{castShadow:_,receiveShadow:L,ref:J},k||o.createElement("planeGeometry",null),P||o.createElement("shaderMaterial",{side:2,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))});r.d(t,{},{E:b})},sKwe(e,t,r){var n=r("ABep"),i=r("on57"),a=r("zd8w"),o=r("iLdV");let s=e=>e?e.replace(/\\mid/g,"|").replace(/\\neg/g,"\xac").replace(/\\cap/g,"\u2229").replace(/\\cup/g,"\u222A").replace(/\\text\{([^}]*)\}/g,"$1").replace(/\\mathrm\{([^}]*)\}/g,"$1").replace(/\\[a-zA-Z]+/g,"").replace(/[{}_^]/g,"").replace(/\s+/g," ").trim().length:0,l=e=>{let t=e.formatValueForInput??o.hG,r=Math.max((0,o.m_)(e.min,e.step,t).length,(0,o.m_)(e.max,e.step,t).length),n=e.inlineUnit?e.unit?.length??0:0;return e.range?2*r+2:r+n};r.d(t,{},{J:({inputs:e})=>{let t=(0,a.useRef)(null),[r,d]=(0,a.useState)(),u=e.some(e=>e.before),c=e.filter(e=>!e.options&&!1!==e.showValueInput),p=Math.max(0,...e.map(e=>s(e.variable))),f=Math.max(0,...c.map(l)),m=Math.max(0,...c.map(e=>s(e.inlineUnit?void 0:e.unit))),h=e.map(e=>e.variable??"").join("\0");return(0,a.useLayoutEffect)(()=>{let e=t.current;if(!e)return;let r=Array.from(e.querySelectorAll("[data-input-selector-variable]"));if(0===r.length)return;let n=()=>{let t=r.filter(e=>"stacked"!==e.dataset.inputSelectorLabelLayout),n=t.length?Math.max(...t.map(t=>{let r=t.cloneNode(!0);r.removeAttribute("data-input-selector-variable"),Object.assign(r.style,{inset:"0 auto auto 0",maxWidth:"none",position:"absolute",visibility:"hidden",whiteSpace:"nowrap",width:"max-content"}),e.appendChild(r);let n=r.getBoundingClientRect().width;return r.remove(),n})):void 0;d(e=>e===n?e:n)};if(n(),"u"<typeof ResizeObserver)return;let i=new ResizeObserver(n);r.forEach(e=>i.observe(e));let a=new MutationObserver(n);return r.forEach(e=>a.observe(e,{attributeFilter:["data-input-selector-label-layout"]})),()=>{i.disconnect(),a.disconnect()}},[h]),(0,n.jsx)("div",{ref:t,"data-input-selector-group":!0,className:"grid min-h-fit min-w-0 shrink grow-0 gap-y-3",children:e.map((e,t)=>(0,n.jsxs)("div",{className:(0,i.A)("grid h-full min-w-0 items-center gap-x-2",u?"grid-cols-[auto_minmax(0,1fr)]":"grid-cols-[minmax(0,1fr)]"),children:[u?e.before??(0,n.jsx)("div",{"aria-hidden":!0}):null,(0,n.jsx)(o.KV,{...e,groupVariableWidthCh:p,groupVariableWidthPx:r,groupUnitWidthCh:m,groupValueWidthCh:f})]},t))})},b:(e,t,r,n,{before:i,disabled:a,displayValue:o,editType:s="CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",formatValueForInput:l,inlineUnit:d,parseInputValue:u,mapValue:c,options:p,optionLabelFormat:f,showValueInput:m,sliderStyle:h,ariaLabel:v,ariaValueText:x,onActiveChange:g,value:b,variable:y,variableBold:w,variableFormat:S,unit:M}={})=>{var E;return{before:i,disabled:a,displayValue:o,options:p,optionLabelFormat:f,showValueInput:m,sliderStyle:h,inlineUnit:d,ariaLabel:v,ariaValueText:x,variable:y??t.variable??(E=String(e),E.match(/[A-Za-z]/)?.[0]??E),variableBold:w??t.variableBold,variableFormat:S??t.variableFormat,unit:M??t.unit,formatValueForInput:l,parseInputValue:u,max:t.max,min:t.min,step:t.step,value:b??Number(r[e]),onActiveChange:g,onChange:(t,r)=>{let i=c?c(t):t;n(t=>({...t,[e]:i}),"function"==typeof s?s(r):s)}}}})},iLdV(e,t,r){var n=r("ABep"),i=r("YAOF"),a=r("on57"),o=r("zd8w"),s=r("Wf1j"),l=r("l7Go"),d=r("jYuH"),u=r("Bdtm");let c=(e,t,r)=>Math.min(Math.max(e,t),r),p=/[-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[-+]?\d+)?/i,f=(e,t,r,n)=>{if(!Number.isFinite(e))return t;let i=Math.round((c(e,t,r)-t)/n),a=(0,d.Dp)(n);return c((0,d.eB)(t+i*n,Math.max(1,a)),t,r)},m=(e,t)=>Number.isFinite(e)?e.toFixed(Math.max(1,(0,d.Dp)(t))):"",h=(e,t,r)=>{let n=r(e,t);return n.match(p)?.[0]??n},v=96,x=e=>{let t=[],r=e.parentElement;for(;r;)"visible"!==window.getComputedStyle(r).overflowY&&t.push(r),r=r.parentElement;return t},g=(0,o.createContext)({isNativeSlider:!1}),b=()=>(0,n.jsx)("svg",{"aria-hidden":!0,className:"h-4 w-4 flex-none",fill:"none",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"m5 6 3-3 3 3M5 10l3 3 3-3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})});r.d(t,{},{KV:({min:e,max:t,step:r,value:d,displayValue:c,onChange:y,onActiveChange:w,disabled:S,options:M,optionLabelFormat:E="text",sliderStyle:A="continuous",ariaLabel:_,ariaValueText:L,variable:P,variableBold:k,variableFormat:j,inlineUnit:z,unit:C,formatValueForInput:N=m,parseInputValue:B,normalizeCommittedValue:I,minSliderWidthPx:T,showValueInput:U=!0,range:R,valueClassName:D,groupVariableWidthCh:O,groupVariableWidthPx:W,groupUnitWidthCh:F,groupValueWidthCh:H})=>{let $,{isNativeSlider:V,onSliderInteractionEnd:q,onSliderInteractionStart:G}=(0,o.useContext)(g),K=(0,s.A)(),Y=B??Number.parseFloat,Z=f(d,e,t,r),Q=Number.isFinite(c)?c:Z,[J,X]=(0,o.useState)(()=>h(Q,r,N)),[ee,et]=(0,o.useState)(!1),er=(0,o.useRef)(!1),en=(0,o.useRef)(!1),ei=(0,o.useRef)(!1),ea=(0,o.useRef)(null),eo=(0,o.useRef)(null),es=(0,o.useRef)(null),el=(0,o.useRef)(null),ed=(0,o.useRef)(null),eu=(0,o.useRef)(null),ec=(0,o.useRef)(null),ep=(0,o.useRef)(null),ef=(0,o.useRef)(!1),[em,eh]=(0,o.useState)(!1),[ev,ex]=(0,o.useState)(!1),[eg,eb]=(0,o.useState)(!1),[ey,ew]=(0,o.useState)(V?"above":"below"),eS=(e="blur")=>{"blur"===e&&ei.current||en.current&&(en.current=!1,w?.(!1),q?.())},eM=()=>{en.current||(en.current=!0,w?.(!0),G?.(P))},eE=()=>{ei.current=!0,eM()};(0,o.useEffect)(()=>{let e=()=>{ei.current=!1,eS("pointer-end")};return window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e),()=>{window.removeEventListener("pointerup",e),window.removeEventListener("pointercancel",e)}},[w,q]),(0,o.useLayoutEffect)(()=>{let e=ed.current,t=eu.current;if(!M||!e||!t)return void eh(!1);let r=()=>{let r=e.clientWidth,n=t.scrollWidth>r+1;eh(e=>e===n?e:n)};r();let n="u"<typeof document?void 0:document.fonts;if(n?.addEventListener("loadingdone",r),"u"<typeof ResizeObserver)return()=>n?.removeEventListener("loadingdone",r);let i=new ResizeObserver(r);return i.observe(e),i.observe(t),()=>{n?.removeEventListener("loadingdone",r),i.disconnect()}},[M,E]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&ef.current&&(ef.current=!1,e.preventDefault(),e.stopPropagation())};return document.addEventListener("keyup",e,!0),()=>document.removeEventListener("keyup",e,!0)},[]),(0,o.useEffect)(()=>{if(!eg)return;ef.current=!1;let e=e=>{let t=e.target;!(t instanceof Node)||ec.current?.contains(t)||ep.current?.contains(t)||eb(!1)},t=e=>{"Escape"===e.key&&(ef.current=!0,e.preventDefault(),e.stopPropagation(),eb(!1),ep.current?.focus())};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t,!0),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t,!0)}},[eg]),(0,o.useEffect)(()=>{(!em||S)&&eb(!1)},[S,em]),(0,o.useLayoutEffect)(()=>{if(!eg)return void ew(V?"above":"below");let e=ec.current,t=ep.current;if(!e||!t)return;let r=()=>{ew((({boundary:e,menuHeight:t,trigger:r})=>{let n=e.bottom-r.bottom-4;if(t<=n)return"below";let i=r.top-e.top-4;return t<=i||i>n?"above":"below"})({boundary:(({clippingAncestors:e,viewport:t})=>e.reduce((e,t)=>({bottom:Math.min(e.bottom,t.bottom),top:Math.max(e.top,t.top)}),t))({clippingAncestors:x(t).map(e=>e.getBoundingClientRect()),viewport:{bottom:window.innerHeight,top:0}}),menuHeight:e.getBoundingClientRect().height,trigger:t.getBoundingClientRect()}))};if(r(),window.addEventListener("resize",r),"u"<typeof ResizeObserver)return()=>window.removeEventListener("resize",r);let n=new ResizeObserver(r);return n.observe(e),n.observe(t),x(t).forEach(e=>n.observe(e)),()=>{window.removeEventListener("resize",r),n.disconnect()}},[eg,V]);let eA=ee?J:h(Q,r,N),e_=Math.max(h(e,r,N).length,h(t,r,N).length),eL=R?($=R.displayValues??R.ariaValueTexts??[h(R.values[0],r,N),h(R.values[1],r,N)],`(${$[0]}, ${$[1]})`):void 0,eP=R?2*e_+2:e_,ek=H??eP,ej=T??v,ez=k??!1,eC=P?P.replace(/[^\w-]+/g,"_"):"input-selector-value",eN=_??(P?K.formatMessage({id:"learningBlock.inputSelector.valueAriaLabel",defaultMessage:"{label} value"},{label:P}):void 0),eB=!!P&&"text"!==j&&(!!("katex"===j||/\\/.test(P))||/^[A-Za-z\u03b8\u03bc\u03c3\u03bb\u03c0\u0394](?:[_^][A-Za-z0-9{}]+)?$/.test(P)),eI=M?.find(n=>f(n.value,e,t,r)===Z)??M?.[0],eT=em?K.formatMessage({id:"learningBlock.inputSelector.overflowMenuAriaLabel",defaultMessage:"{value}. Show all {label} options"},{label:eN??K.formatMessage({id:"learningBlock.inputSelector.selectorAriaLabel",defaultMessage:"selector"}),value:eI?.ariaLabel??eI?.label??""}):void 0,eU=(0,o.useId)(),eR=(e,t)=>"katex"!==t?e:(0,n.jsx)(l.r,{className:"katex",latex:e}),eD=n=>f(n.value,e,t,r),eO=M?.find(e=>eD(e)===Z)??M?.[0],eW=n=>{let i=Y(n);if(!Number.isFinite(i))return void X(h(Q,r,N));let a=((e,{max:t,min:r,normalizeCommittedValue:n,step:i})=>n?n(e):f(e,r,t,i))(i,{min:e,max:t,step:r,normalizeCommittedValue:I});y(a,"input"),X(h(a,r,N))},eF=P?(0,n.jsx)("div",{"data-input-selector-variable":!0,"data-input-selector-label-layout":ev?"stacked":"inline",className:(0,a.A)("text-token-text-primary min-w-0 max-w-full justify-self-start text-sm leading-5 whitespace-normal hyphens-auto [overflow-wrap:anywhere] [&_.katex]:!text-[1em]",ez&&"font-medium"),children:eB?(0,n.jsx)(l.r,{className:"katex",latex:P??""}):P}):null,eH=!!(z&&C&&!R),e$=C&&!eH?(0,n.jsx)("div",{ref:el,className:"text-token-text-secondary shrink-0 text-xs leading-4 whitespace-nowrap [&_.katex]:text-inherit",children:C}):null,eV=!!H,eq=`minmax(max(${ek}ch,2rem), max(${ek}ch,2rem))`,eG=!!F,eK=`minmax(${F??0}ch, ${F??0}ch)`,eY=!M&&eG?e$??(0,n.jsx)("div",{ref:el,"aria-hidden":!0}):null,eZ=W?`${W}px`:O?`${O}ch`:null,eQ=eZ?`minmax(0, min(${eZ}, 40%))`:"fit-content(40%)";(0,o.useLayoutEffect)(()=>{let e=ea.current,t=eo.current;if(M||!e||!t)return void ex(!1);let r=()=>{let r=e.clientWidth;if(0===r)return;let n=(({availableWidth:e,labelWidth:t,minSliderWidthPx:r=v,unitWidth:n,valueWidth:i})=>{let a=2+Number(i>0)+Number(n>0);return t+i+n+(a-1)*12+r>e+1})({availableWidth:r,labelWidth:Math.max(t.scrollWidth,W??0),minSliderWidthPx:ej,unitWidth:el.current?.clientWidth??0,valueWidth:es.current?.clientWidth??0});ex(e=>e===n?e:n)};r();let n="u"<typeof document?void 0:document.fonts;if(n?.addEventListener("loadingdone",r),"u"<typeof ResizeObserver)return()=>n?.removeEventListener("loadingdone",r);let i=new ResizeObserver(r);return i.observe(e),i.observe(t),es.current&&i.observe(es.current),el.current&&i.observe(el.current),()=>{n?.removeEventListener("loadingdone",r),i.disconnect()}},[F,H,W,M,ej,P,U,C]);let eJ=e=>ec.current?.querySelectorAll("[data-input-selector-discrete-menu-option]").item(e).focus();(0,o.useEffect)(()=>{eg&&M&&eJ(Math.max(M.findIndex(e=>eD(e)===Z),0))},[eg,M,Z]);let eX=M?(0,n.jsx)("div",{role:"radiogroup","aria-label":eN,className:(0,a.A)("flex h-6 w-full min-w-0 flex-nowrap gap-0.5 overflow-x-auto overflow-y-hidden rounded-full bg-black/7 p-0.5 dark:bg-white/6",S&&"opacity-40"),children:M.map(e=>{let t=eD(e),r=t===Z;return(0,n.jsx)("button",{type:"button",role:"radio","aria-checked":r,"aria-label":e.ariaLabel,disabled:S,className:(0,a.A)("text-token-text-secondary flex h-5 min-w-max flex-1 items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",r&&"bg-token-bg-primary !text-token-text-primary shadow-sm dark:bg-white dark:!text-black",!r&&!S&&"hover:text-token-text-primary focus-visible:text-token-text-primary",!S&&"focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"),onClick:()=>y(t,"input"),children:(0,n.jsx)("span",{className:"min-w-6",children:eR(e.label,E)})},e.value)})}):null,e0=M?(0,n.jsxs)("div",{"data-input-selector-discrete-rail":!0,className:(0,a.A)("relative h-6 w-full min-w-0",em&&"flex justify-end"),children:[em&&eO?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{type:"button","aria-controls":eU,"aria-expanded":eg,"aria-haspopup":"listbox","aria-label":eT,disabled:S,"data-input-selector-discrete-menu-trigger":!0,ref:ep,className:(0,a.A)("text-token-text-primary flex h-6 max-w-full min-w-0 items-center gap-1 overflow-hidden rounded-full px-2 text-[15px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",!S&&"hover:bg-black/5 focus-visible:bg-black/7 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/7 dark:focus-visible:bg-white/10"),onClick:()=>eb(e=>!e),children:[(0,n.jsx)("span",{className:"min-w-0 truncate",children:eR(eO.label,E)}),(0,n.jsx)(b,{})]}),eg?(0,n.jsx)("div",{ref:ec,"aria-label":eN,className:(0,a.A)("border-token-border-default bg-token-bg-primary text-token-text-primary absolute end-0 z-50 flex min-w-max flex-col gap-0.5 overflow-hidden rounded-lg border p-1 shadow-lg","above"===ey?"bottom-full mb-1":"top-full mt-1"),id:eU,role:"listbox",children:M.map((e,t)=>{let r=eD(e),i=r===Z;return(0,n.jsx)("button",{type:"button","aria-selected":i,"data-input-selector-discrete-menu-option":!0,role:"option",className:(0,a.A)("flex min-w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-start text-[15px] leading-5 whitespace-nowrap outline-none [&_.katex]:!text-[1em]",i&&"bg-black/7 font-medium dark:bg-white/10",!i&&"hover:bg-black/7 focus-visible:bg-black/7 dark:hover:bg-white/10 dark:focus-visible:bg-white/10"),onClick:()=>{y(r,"input"),eb(!1),ep.current?.focus()},onKeyDown:e=>((e,t)=>{if(M)switch(e.key){case"ArrowDown":e.preventDefault(),eJ((t+1)%M.length);break;case"ArrowUp":e.preventDefault(),eJ((t-1+M.length)%M.length);break;case"Home":e.preventDefault(),eJ(0);break;case"End":e.preventDefault(),eJ(M.length-1)}})(e,t),children:eR(e.label,E)},e.value)})}):null]}):eX,(0,n.jsx)("div",{ref:eu,"aria-hidden":!0,"data-input-selector-overflow-measure":!0,className:"pointer-events-none absolute inset-x-0 top-0 h-6 overflow-hidden opacity-0",children:(0,n.jsx)("div",{className:"flex h-6 w-max min-w-max gap-0.5 p-0.5",children:M.map(e=>(0,n.jsx)("span",{className:"flex h-5 min-w-max flex-none items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap [&_.katex]:!text-[1em]",children:(0,n.jsx)("span",{className:"min-w-6",children:eR(e.label,E)})},e.value))})})]}):null,e1=P&&!M&&U&&(0,n.jsxs)("div",{ref:es,className:(0,a.A)("text-token-text-primary grid h-5 min-w-8 grid-rows-1 rounded-md px-1.5 text-end text-[11px] leading-none whitespace-nowrap after:invisible after:font-mono after:whitespace-pre after:content-[attr(data-value)] after:[grid-area:1/1]",eH?"grid-cols-[minmax(0,1fr)_auto] gap-x-0.5":"grid-cols-1",R&&(ev?"text-end":"text-start"),D,!S&&!R&&"transition-colors focus-within:bg-black/7 hover:bg-black/5 dark:focus-within:bg-white/10 dark:hover:bg-white/7"),"data-value":"0".repeat(ek),children:[R?(0,n.jsx)("span",{"data-input-selector-range-value":!0,className:(0,a.A)("relative flex h-full items-center tabular-nums [grid-area:1/1]",ev?"justify-end":"justify-start"),children:eL}):(0,n.jsx)("input",{"aria-label":eN,className:"relative h-full min-w-[4ch] border-none bg-transparent p-0 text-end text-[11px] leading-none whitespace-nowrap shadow-[none] outline-none [grid-area:1/1] focus:outline-none",disabled:S,inputMode:"decimal",name:eC,size:1,type:"text",value:eA,onBlur:()=>{if(er.current){er.current=!1;return}et(!1),eW(J)},onChange:e=>{var t;let r;return X(B?e.currentTarget.value:""===(r=(t=e.currentTarget.value).trim())||"-"===r||"."===r?t:r.match(p)?.[0]??t)},onFocus:()=>{et(!0),X(h(Q,r,N))},onKeyDown:e=>{if("Enter"===e.key){e.preventDefault(),er.current=!0,et(!1),eW(J),e.currentTarget.blur();return}"Escape"===e.key&&(e.preventDefault(),er.current=!0,et(!1),X(h(Z,r,N)),e.currentTarget.blur())}}),eH?(0,n.jsx)("span",{"aria-hidden":!0,className:"text-token-text-secondary self-center text-xs leading-4",children:C}):null]}),e2=[];ev?(P&&e2.push("minmax(0, 1fr)"),e1&&e2.push(eq),eY&&e2.push(eK)):(P&&e2.push(eQ),e1&&e2.push(eq),eY&&e2.push(eK),e2.push("minmax(0, 1fr)"));let e3=[],e4=eV&&!!P,e5=eG&&!!P;P&&e3.push(eQ),e4&&e3.push(eq),e5&&e3.push(eK),e3.push("minmax(0, 1fr)");let e6=`${e3.length} / ${e3.length+1}`,e7=P?"2 / -1":"1 / -1",e8=Number.isFinite(e)&&Number.isFinite(t)&&Number.isFinite(r)&&r>0&&t>=e?Math.max(0,Math.round((t-e)/r)):0,e9=Math.min(e8+1,12),te="stepped"===A&&e8>0?Array.from({length:e9},(e,t)=>t):[],tt="stepped"===A?"h-6 w-6":"h-5 w-5",tr="relative flex h-6 w-full min-w-0 flex-1 items-center rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.06)]",tn=te.length>0?(0,n.jsx)("div",{"aria-hidden":!0,"data-input-selector-rendered-marker-count":te.length,className:"pointer-events-none absolute inset-x-4 top-1/2 z-0 flex -translate-y-1/2 justify-between",children:te.map(e=>(0,n.jsx)("span",{"data-input-selector-step-marker":!0,className:"h-[3px] w-[3px] rounded-full bg-black/20 dark:bg-white/20"},e))}):null,ti=V&&!R?(0,n.jsxs)("div",{"data-input-selector-slider":!0,"data-input-selector-slider-style":A,className:(0,a.A)(tr,S&&"opacity-40"),children:[tn,(0,n.jsx)("input",{"aria-label":eN,"aria-valuetext":L,type:"range","data-learning-block-pan":S?void 0:"horizontal",className:(0,a.A)(u.A.inputSelector,"stepped"===A&&u.A.inputSelectorStepped,"text-token-text-primary relative z-10 flex w-full min-w-0 flex-1 items-center"),disabled:S,max:t,min:e,step:r,value:Z,onBlur:()=>eS("blur"),onChange:n=>{eM(),y(f(n.currentTarget.valueAsNumber,e,t,r),"slider")},onPointerDown:eE})]}):(0,n.jsxs)(i.bL,{"data-input-selector-slider":!0,"data-input-selector-slider-style":A,"data-learning-block-pan":S?void 0:"horizontal",className:(0,a.A)(tr,"touch-pan-y",S&&"opacity-40"),disabled:S,max:t,min:e,onBlurCapture:()=>eS("blur"),onPointerDownCapture:eE,step:r,value:R?R.values.map(n=>f(n,e,t,r)):[Z],onValueChange:n=>{(eM(),R)?R.onChange([f(n[0],e,t,r),f(n[1],e,t,r)]):y(f(n[0],e,t,r),"slider")},children:[(0,n.jsx)(i.CC,{className:"absolute inset-0 rounded-full",children:(0,n.jsx)(i.Q6,{className:"absolute inset-y-0 rounded-full bg-transparent"})}),tn,(0,n.jsx)(i.zi,{"aria-label":R?.ariaLabels[0]??eN,"aria-valuetext":R?.ariaValueTexts?.[0]??L,className:(0,a.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative cursor-pointer rounded-full border shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt,R?"flex items-center justify-center text-black":"block"),children:R?.thumbLabels?.[0]&&(0,n.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:R.thumbLabels[0]})}),R&&(0,n.jsx)(i.zi,{"aria-label":R.ariaLabels[1],"aria-valuetext":R.ariaValueTexts?.[1],className:(0,a.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative flex cursor-pointer items-center justify-center rounded-full border text-black shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt),children:R.thumbLabels?.[1]&&(0,n.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:R.thumbLabels[1]})})]});return M?(0,n.jsxs)("div",{className:"grid h-full min-w-0 items-center gap-x-3",style:{gridTemplateColumns:e3.join(" ")},children:[eF,!em&&e4?(0,n.jsx)("div",{"aria-hidden":!0}):null,!em&&e5?(0,n.jsx)("div",{"aria-hidden":!0}):null,(0,n.jsx)("div",{className:"h-full min-w-0",style:{gridColumn:em?e7:e6,gridRow:1},children:e0}),(0,n.jsx)("div",{ref:ed,"aria-hidden":!0,"data-input-selector-discrete-width-measure":!0,className:"pointer-events-none h-0 min-w-0 opacity-0",style:{gridColumn:e6,gridRow:1}})]}):(0,n.jsxs)("div",{ref:ea,className:(0,a.A)("relative grid min-w-0 items-center gap-x-3",R&&"text-[11px]",ev&&"gap-y-2"),style:{gridTemplateColumns:e2.join(" ")},children:[eF,e1,eY,(0,n.jsx)("div",{className:"min-w-0",style:ev?{gridColumn:"1 / -1"}:void 0,children:ti}),P?(0,n.jsx)("div",{ref:eo,"aria-hidden":!0,"data-input-selector-label-measure":!0,className:(0,a.A)("pointer-events-none absolute inset-0 h-0 w-max max-w-none overflow-hidden text-sm leading-5 whitespace-nowrap opacity-0 [&_.katex]:!text-[1em]",ez&&"font-medium"),children:eB?(0,n.jsx)(l.r,{className:"katex",latex:P??""}):P}):null]})},hG:m,m_:h,xT:e=>e})},WU2o(e,t,r){r.d(t,{SphericalCoordinatesControls:()=>W,SphericalCoordinatesVisualization:()=>F});var n,i,a,o,s=r("ABep"),l=r("Ipng"),d=r("mevF"),u=r("unhp"),c=r("PVZC"),p=r("zd8w"),f=r("hPwS");let m=parseInt("179".replace(/\D+/g,"")),h=(n={screenspace:!1,color:new c.Q1f("black"),opacity:1,thickness:.05,size:new c.I9Y},i=`#include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   #include <clipping_planes_pars_vertex>
   uniform float thickness;
   uniform bool screenspace;
   uniform vec2 size;
   void main() {
     #if defined (USE_SKINNING)
	     #include <beginnormal_vertex>
       #include <morphnormal_vertex>
       #include <skinbase_vertex>
       #include <skinnormal_vertex>
       #include <defaultnormal_vertex>
     #endif
     #include <begin_vertex>
	   #include <morphtarget_vertex>
	   #include <skinning_vertex>
     #include <project_vertex>
     #include <clipping_planes_vertex>
     vec4 tNormal = vec4(normal, 0.0);
     vec4 tPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       tNormal = instanceMatrix * tNormal;
       tPosition = instanceMatrix * tPosition;
     #endif
     if (screenspace) {
       vec3 newPosition = tPosition.xyz + tNormal.xyz * thickness;
       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
     } else {
       vec4 clipPosition = projectionMatrix * modelViewMatrix * tPosition;
       vec4 clipNormal = projectionMatrix * modelViewMatrix * tNormal;
       vec2 offset = normalize(clipNormal.xy) * thickness / size * clipPosition.w * 2.0;
       clipPosition.xy += offset;
       gl_Position = clipPosition;
     }
   }`,a=`uniform vec3 color;
   uniform float opacity;
   #include <clipping_planes_pars_fragment>
   void main(){
     #include <clipping_planes_fragment>
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <${m>=154?"colorspace_fragment":"encodings_fragment"}>
   }`,(o=class extends c.BKk{constructor(e){for(let t in super({vertexShader:i,fragmentShader:a,...e}),n)this.uniforms[t]=new c.nc$(n[t]),Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(e){this.uniforms[t].value=e}});this.uniforms=c.LlO.clone(this.uniforms)}}).key=c.cj9.generateUUID(),o);function v({color:e="black",opacity:t=1,transparent:r=!1,screenspace:n=!1,toneMapped:i=!0,polygonOffset:a=!1,polygonOffsetFactor:o=0,renderOrder:s=0,thickness:l=.05,angle:d=Math.PI,clippingPlanes:m,...x}){let g=p.useRef(null),[b]=p.useState(()=>new h({side:1})),{gl:y}=(0,f.C)(),w=y.getDrawingBufferSize(new c.I9Y);p.useMemo(()=>(0,f.e)({OutlinesMaterial:h}),[]);let S=p.useRef(0),M=p.useRef(null);return p.useLayoutEffect(()=>{let e=g.current;if(!e)return;let t=e.parent;if(t&&t.geometry&&(S.current!==d||M.current!==t.geometry)){var r;S.current=d,M.current=t.geometry;let n=null==(r=e.children)?void 0:r[0];n&&(d&&n.geometry.dispose(),e.remove(n)),t.skeleton?((n=new c.I46).material=b,n.bind(t.skeleton,t.bindMatrix)):t.isInstancedMesh?(n=new c.ZLX(t.geometry,b,t.count)).instanceMatrix=t.instanceMatrix:(n=new c.eaF).material=b,e.add(n),n.geometry=d?function(e,t=Math.PI/3){let r=Math.cos(t),n=(1+1e-10)*100,i=[new c.Pq0,new c.Pq0,new c.Pq0],a=new c.Pq0,o=new c.Pq0,s=new c.Pq0,l=new c.Pq0;function d(e){let t=~~(e.x*n),r=~~(e.y*n),i=~~(e.z*n);return`${t},${r},${i}`}let u=e.index?e.toNonIndexed():e,p=u.attributes.position,f={};for(let e=0,t=p.count/3;e<t;e++){let t=3*e,r=i[0].fromBufferAttribute(p,t+0),n=i[1].fromBufferAttribute(p,t+1),s=i[2].fromBufferAttribute(p,t+2);a.subVectors(s,n),o.subVectors(r,n);let l=new c.Pq0().crossVectors(a,o).normalize();for(let e=0;e<3;e++){let t=d(i[e]);t in f||(f[t]=[]),f[t].push(l)}}let m=new Float32Array(3*p.count),h=new c.THS(m,3,!1);for(let e=0,t=p.count/3;e<t;e++){let t=3*e,n=i[0].fromBufferAttribute(p,t+0),u=i[1].fromBufferAttribute(p,t+1),c=i[2].fromBufferAttribute(p,t+2);a.subVectors(c,u),o.subVectors(n,u),s.crossVectors(a,o).normalize();for(let e=0;e<3;e++){let n=f[d(i[e])];l.set(0,0,0);for(let e=0,t=n.length;e<t;e++){let t=n[e];s.dot(t)>r&&l.add(t)}l.normalize(),h.setXYZ(t+e,l.x,l.y,l.z)}}return u.setAttribute("normal",h),u}(t.geometry,d):t.geometry,n.morphTargetInfluences=t.morphTargetInfluences,n.morphTargetDictionary=t.morphTargetDictionary}}),p.useLayoutEffect(()=>{let d=g.current;if(!d)return;let u=d.children[0];if(u){u.renderOrder=s;let c=d.parent;(0,f.s)(u,{morphTargetInfluences:c.morphTargetInfluences,morphTargetDictionary:c.morphTargetDictionary}),(0,f.s)(u.material,{transparent:r,thickness:l,color:e,opacity:t,size:w,screenspace:n,toneMapped:i,polygonOffset:a,polygonOffsetFactor:o,clippingPlanes:m,clipping:m&&m.length>0})}}),p.useEffect(()=>()=>{let e=g.current;if(!e)return;let t=e.children[0];t&&(d&&t.geometry.dispose(),e.remove(t))},[]),p.createElement("group",(0,u.A)({ref:g},x))}var x=r("Njew"),g=r("oeGO"),b=r("Qgfj"),y=r("Wf1j"),w=r("oyxz"),S=r("KwmQ"),M=r("iLdV"),E=r("sKwe"),A=r("LP6J"),_=r("A8Th"),L=r("sszc");let P=L.$$.max+.45,k=L.$$.max+.72,j=Math.PI/18,z=Math.PI-.16,C=(e,t,r)=>{let n=document.createElement("span");n.style.color=`var(${t})`,n.style.position="absolute",n.style.visibility="hidden",e.appendChild(n);let i=window.getComputedStyle(n).color||r;return n.remove(),i},N=({boundary:e,color:t,innerBoundary:r,opacity:n})=>{let i=(0,p.useMemo)(()=>{let t,n;return t=r?[...e,...r].map(L.sE):[[0,0,0],...e].map(L.sE),(n=new c.LoY).setAttribute("position",new c.qtW(t.flat(),3)),n.setIndex(Array.from({length:Math.max(0,e.length-1)},(t,n)=>r?[n,n+1,e.length+n,n+1,e.length+n+1,e.length+n]:[0,n+1,n+2]).flat()),n.computeVertexNormals(),n},[e,r]);return(0,p.useLayoutEffect)(()=>()=>i.dispose(),[i]),(0,s.jsx)("mesh",{geometry:i,renderOrder:1,children:(0,s.jsx)("meshBasicMaterial",{color:t,transparent:!0,opacity:n,side:2,depthWrite:!1})})},B=({color:e,opacity:t=1,points:r,width:n=1.6})=>(0,s.jsx)(l.N,{color:e,depthWrite:!1,lineWidth:n,opacity:t,points:r.map(L.sE),transparent:t<1}),I=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.E,{center:!0,position:[k,0,0],children:(0,s.jsx)("span",{className:"text-token-text-secondary text-xs",children:"x"})}),(0,s.jsx)(d.E,{center:!0,position:[0,0,k],children:(0,s.jsx)("span",{className:"text-token-text-secondary text-xs",children:"y"})}),(0,s.jsx)(d.E,{center:!0,position:[0,k,0],children:(0,s.jsx)("span",{className:"text-token-text-secondary text-xs",children:"z"})})]}),T=({colors:e,isThumbnail:t,values:r})=>{let{pStart:n,p:i,phiStart:a,phi:o,thetaStart:l,theta:d}=r,u=o-a,c=d-l,f=(0,p.useMemo)(()=>(0,L.Ps)(i,a,o,l),[i,a,o,l]),m=(0,p.useMemo)(()=>(0,L.Ps)(i,a,o,d),[i,a,o,d]),h=(0,p.useMemo)(()=>(0,L.Ps)(n,a,o,l),[n,a,o,l]),x=(0,p.useMemo)(()=>(0,L.Ps)(n,a,o,d),[n,a,o,d]),g=(0,p.useMemo)(()=>(0,L._6)(i,a,l,d),[i,a,l,d]),b=(0,p.useMemo)(()=>(0,L._6)(i,o,l,d),[i,o,l,d]),y=(0,p.useMemo)(()=>(0,L._6)(n,a,l,d),[n,a,l,d]),w=(0,p.useMemo)(()=>(0,L._6)(n,o,l,d),[n,o,l,d]),S=(0,p.useMemo)(()=>(0,L.Cu)(L.$$.max,"equatorial"),[]),M=(0,p.useMemo)(()=>(0,L.Cu)(L.$$.max,"meridian"),[]),E=i-n>1e-6&&u>1e-6&&c>1e-6,A=n>1e-6,_=c<L.hM.max-1e-6,k=a>L.Er.controlMin+1e-6,j=o<L.Er.max-1e-6;return(0,s.jsxs)("group",{children:[!t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(B,{color:e.secondary,opacity:.22,points:[[-P,0,0],[P,0,0]],width:1}),(0,s.jsx)(B,{color:e.secondary,opacity:.22,points:[[0,-P,0],[0,P,0]],width:1}),(0,s.jsx)(B,{color:e.secondary,opacity:.22,points:[[0,0,-P],[0,0,P]],width:1}),(0,s.jsx)(B,{color:e.secondary,opacity:.14,points:S,width:1}),(0,s.jsx)(B,{color:e.secondary,opacity:.14,points:M,width:1}),(0,s.jsx)(I,{})]}),E&&(0,s.jsxs)("mesh",{renderOrder:2,children:[(0,s.jsx)("sphereGeometry",{args:[i,64,40,(0,L.mT)(d),c,a,u]}),(0,s.jsx)("meshBasicMaterial",{color:e.primary,transparent:!0,opacity:.25,side:2,depthWrite:!1}),(0,s.jsx)(v,{angle:0,color:e.primary,opacity:.34,renderOrder:3,thickness:.8,transparent:!0})]}),E&&A&&(0,s.jsxs)("mesh",{renderOrder:2,children:[(0,s.jsx)("sphereGeometry",{args:[n,64,40,(0,L.mT)(d),c,a,u]}),(0,s.jsx)("meshBasicMaterial",{color:e.companion,transparent:!0,opacity:.2,side:2,depthWrite:!1}),(0,s.jsx)(v,{angle:0,color:e.companion,opacity:.24,renderOrder:3,thickness:.65,transparent:!0})]}),E&&_&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{boundary:f,color:e.companion,innerBoundary:A?h:void 0,opacity:.14}),(0,s.jsx)(N,{boundary:m,color:e.companion,innerBoundary:A?x:void 0,opacity:.2})]}),E&&k&&(0,s.jsx)(N,{boundary:g,color:e.accent,innerBoundary:A?y:void 0,opacity:.13}),E&&j&&(0,s.jsx)(N,{boundary:b,color:e.accent,innerBoundary:A?w:void 0,opacity:.18}),E&&_&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(B,{color:e.primary,opacity:.3,points:f,width:1}),(0,s.jsx)(B,{color:e.primary,opacity:.3,points:m,width:1})]}),E&&k&&(0,s.jsx)(B,{color:e.primary,opacity:.3,points:g,width:1}),E&&j&&(0,s.jsx)(B,{color:e.primary,opacity:.3,points:b,width:1})]})},U=(0,b.YK)({sphere:{id:"learningBlock.sphericalCoordinates.shapeSphere",defaultMessage:"Sphere"},cone:{id:"learningBlock.sphericalCoordinates.shapeCone",defaultMessage:"Cone"},donut:{id:"learningBlock.sphericalCoordinates.shapeDonut",defaultMessage:"Donut"}}),R=(0,b.YK)({radialStart:{id:"learningBlock.sphericalCoordinates.radialLowerBound",defaultMessage:"Radial lower bound a"},radialEnd:{id:"learningBlock.sphericalCoordinates.radialUpperBound",defaultMessage:"Radial upper bound b"},polarStart:{id:"learningBlock.sphericalCoordinates.polarLowerBound",defaultMessage:"Polar-angle lower bound a"},polarEnd:{id:"learningBlock.sphericalCoordinates.polarUpperBound",defaultMessage:"Polar-angle upper bound b"},azimuthalStart:{id:"learningBlock.sphericalCoordinates.azimuthalLowerBound",defaultMessage:"Azimuthal-angle lower bound a"},azimuthalEnd:{id:"learningBlock.sphericalCoordinates.azimuthalUpperBound",defaultMessage:"Azimuthal-angle upper bound b"}}),D=(0,b.YK)({value:{id:"learningBlock.sphericalCoordinates.angularValuePluralized",defaultMessage:"{quantity, plural, one {{multiple} pi radian} other {{multiple} pi radians}}"}}),O=(e,t)=>e.formatMessage(D.value,{quantity:t/Math.PI,multiple:(0,_.Sp)(e,t/Math.PI)}),W=({values:e,setValues:t})=>{let r=(0,y.A)(),n=(0,L.ug)(e),i=(0,A.Z7)(r),a=r.formatMessage({id:"learningBlock.sphericalCoordinates.shapeSelector",defaultMessage:"Spherical-coordinate shape"}),o=r.formatMessage(R.radialStart),l=r.formatMessage(R.radialEnd),d=r.formatMessage(R.polarStart),u=r.formatMessage(R.polarEnd),c=r.formatMessage(R.azimuthalStart),p=r.formatMessage(R.azimuthalEnd),f=(0,M.xT)(L.ZF.map((e,t)=>({value:t,label:r.formatMessage(U[e])}))),m=(e,r,[n,i],a=1)=>{let o=i*a;t(t=>({...t,[e]:o>1e-6?n*a/o:0,[r]:o}),"CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")};return(0,s.jsx)(S.Ur,{screenReaderContent:(0,s.jsx)(w.A,{id:"learningBlock.sphericalCoordinates.controlsDescription",defaultMessage:"Choose a sphere, cone, or donut preset, then adjust the a and b handles to set each radial, polar-angle, and azimuthal-angle interval."}),children:(0,s.jsx)(E.J,{inputs:[{ariaLabel:a,min:0,max:L.ZF.length-1,step:1,value:L.ZF.indexOf(n.shape),options:f,onChange:e=>{let r=L.ZF[e];r&&t((0,L.Qz)(r),"CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")}},{...i,variable:"p",min:L.$$.controlMin,max:L.$$.max,step:L.$$.step,value:n.p,ariaLabel:l,ariaValueText:(0,_.Sp)(r,n.p),onChange:e=>m("radialInnerFraction","p",[Math.min(n.pStart,e),e]),range:{values:[n.pStart,n.p],ariaLabels:[o,l],ariaValueTexts:[(0,_.Sp)(r,n.pStart),(0,_.Sp)(r,n.p)],displayValues:[(0,_.Sp)(r,n.pStart),(0,_.Sp)(r,n.p)],onChange:e=>m("radialInnerFraction","p",e)}},{...i,variable:"\\phi",min:L.Er.controlMin/Math.PI,max:L.Er.max/Math.PI,step:L.Er.sliderStep,value:n.phi/Math.PI,ariaLabel:u,ariaValueText:O(r,n.phi),onChange:e=>m("polarLowerFraction","phi",[Math.min(n.phiStart/Math.PI,e),e],Math.PI),range:{values:[n.phiStart/Math.PI,n.phi/Math.PI],ariaLabels:[d,u],ariaValueTexts:[O(r,n.phiStart),O(r,n.phi)],displayValues:[(0,_.sS)(r,n.phiStart),(0,_.sS)(r,n.phi)],onChange:e=>m("polarLowerFraction","phi",e,Math.PI)}},{...i,variable:"\\theta",min:L.hM.controlMin/Math.PI,max:L.hM.max/Math.PI,step:L.hM.sliderStep,value:n.theta/Math.PI,ariaLabel:p,ariaValueText:O(r,n.theta),onChange:e=>m("azimuthalLowerFraction","theta",[Math.min(n.thetaStart/Math.PI,e),e],Math.PI),range:{values:[n.thetaStart/Math.PI,n.theta/Math.PI],ariaLabels:[c,p],ariaValueTexts:[O(r,n.thetaStart),O(r,n.theta)],displayValues:[(0,_.sS)(r,n.thetaStart),(0,_.sS)(r,n.theta)],onChange:e=>m("azimuthalLowerFraction","theta",e,Math.PI)}}]})})},F=({values:e,presentationMode:t})=>{let r=(0,y.A)(),n=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(e=>{let[t,r]=(0,p.useState)(null);return(0,p.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let n=()=>{let e=window.getComputedStyle(t).color,n={accent:C(t,"--learning-block-accent",e),companion:C(t,"--learning-block-color-companion",e),primary:C(t,"--learning-block-color-primary",e),secondary:C(t,"--text-secondary",e)};r(e=>e?.accent===n.accent&&e.companion===n.companion&&e.primary===n.primary&&e.secondary===n.secondary?e:n)};if(n(),"u"<typeof MutationObserver)return;let i=new MutationObserver(n),a={attributes:!0,attributeFilter:["class","style","data-theme","data-accent"]};return i.observe(document.documentElement,a),document.body&&i.observe(document.body,a),i.observe(t,a),()=>i.disconnect()},[e]),t})(n),o=(0,L.ug)(e),l="thumbnail"===t,d=r.formatMessage({id:"learningBlock.sphericalCoordinates.regionDescriptionWithLocalizedAngles",defaultMessage:"{shape} with radial bounds {radiusStart} to {radiusEnd}, polar-angle bounds {polarStart} to {polarEnd}, and azimuthal-angle bounds {azimuthStart} to {azimuthEnd}. The transverse azimuthal radius is {transverseRadius}, equal to radial distance times the sine of the polar angle."},{shape:r.formatMessage(U[o.shape]),radiusStart:(0,_.Sp)(r,o.pStart),radiusEnd:(0,_.Sp)(r,o.p),polarStart:O(r,o.phiStart),polarEnd:O(r,o.phi),azimuthStart:O(r,o.thetaStart),azimuthEnd:O(r,o.theta),transverseRadius:(0,_.Sp)(r,(0,L.pC)(o.p,Math.min(Math.max(Math.PI/2,o.phiStart),o.phi)))}),u=r.formatMessage({id:"learningBlock.sphericalCoordinates.keyboardCameraControls",defaultMessage:"Use the arrow keys to rotate the three-dimensional view"});return(0,s.jsx)("div",{ref:n,"aria-description":l?void 0:u,"aria-keyshortcuts":l?void 0:"ArrowLeft ArrowRight ArrowUp ArrowDown","aria-label":d,className:`text-token-text-primary relative w-full overflow-hidden ${l?"h-full":"h-[252px]"}`,onKeyDown:l?void 0:e=>{let t=i.current;if(t){switch(e.key){case"ArrowLeft":t.setAzimuthalAngle(t.getAzimuthalAngle()+j);break;case"ArrowRight":t.setAzimuthalAngle(t.getAzimuthalAngle()-j);break;case"ArrowUp":t.setPolarAngle(Math.max(.16,t.getPolarAngle()-j));break;case"ArrowDown":t.setPolarAngle(Math.min(z,t.getPolarAngle()+j));break;default:return}e.preventDefault(),t.update()}},role:"img",tabIndex:l?void 0:0,children:a&&(0,s.jsxs)(g.Hl,{"data-learning-block-pan":l?void 0:"both","aria-hidden":!0,camera:{fov:l?45:47,position:[12,9,12]},dpr:[1,1.5],frameloop:"demand",gl:{alpha:!0,antialias:!0},style:{height:"100%",touchAction:l?"auto":"none",width:"100%"},children:[(0,s.jsx)(T,{colors:a,isThumbnail:l,values:o}),!l&&(0,s.jsx)(x.N,{ref:i,enableDamping:!1,enablePan:!1,enableZoom:!1,maxPolarAngle:z,minPolarAngle:.16})]})})}}};
//# sourceMappingURL=706713.521e4a2c66.js.map