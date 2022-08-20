// Copyright 2011 Google Inc.                                    \
//                                                \
// This code is licensed under the same terms as WebM:                        \
//  Software License Agreement:  http://www.webmproject.org/license/software/            \
//  Additional IP Rights Grant:  http://www.webmproject.org/license/additional/            \
// -----------------------------------------------------------------------------        \
//                                                \
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND         \
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED         \
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.         \
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,         \
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,         \
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,         \
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY         \
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING             \
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,         \
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.                        \
//                                                \
// -----------------------------------------------------------------------------        \
//                                                \
// Copyright 2011 Dominik Homberger                                \
// WebPJS 0.0.2 & Libwebp JavaScript   / libwebpjs - the libwebp implementation in JavaScript    \
// WebPJS 0.0.2 & Libwebp ActionScript / libwebpas - the libwebp implementation in ActionScript    \
// with alpha channel support (WEBP_EXPERIMENTAL_FEATURES)                    \
//                                                \
// Author: Dominik Homberger (dominik.homberger@googlemail.com)                    \
//                                                \
// Libwebp Decoder Library libwebpjs-0.1.3-smaller.min.js                    \
// WebPJS CORE 0.0.2';
(function () {
  let char_ = 0; let short_ = 0; let int_ = 0; let long_ = 0; let void_ = 0;
  let int8_t = char_;
  let uint8_t = char_;
  let int16_t = short_;
  let uint16_t = short_;
  let int32_t = int_;
  let uint32_t = int_;
  let uint64_t = long_;
  let int64_t = long_;
  let float_ = 0;
  let size_t = 0;
  let double_ = 0;
  let score_t = int64_t;
  function alert2(a) { } function newObjectIt(a) {
    return JSON.parse(JSON.stringify(a))
  }
  function convertBinaryToArray(a) {
    let b = new Array;
    let c = a.length;
    for (i = 0;
      i < c;
      ++i)b.push(a.charCodeAt(i));
    return b
  }
  function int64BitLeft(a, b) {
    let c = new Array;
    let i;
    for (i = 0;
      i < b;
      ++i)c[i] = "0";
    bits = String(a.toString(2)) + c.join("");
    return parseInt(bits, 2)
  }
  function write32BitIn4Bytes(a, b, c) {
    let i;
    for (i = 3;
      i >= 0;
      --i)a[b + (3 - i)] = c >> 8 * i & 255
  }
  function write4BytesIn32Bit(a, b) {
    return a[b + 0] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3]
  }
  function alert32BitIn4Bytes(a) {
    let i; let str = "";
    for (i = 3;
      i >= 0;
      --i)str += " " + (a >> 8 * i & 255);
    alert2(str)
  }
  function Byte2Hex(a) {
    return "0x" + a.toString(16)
  }
  function memcpy(a, b, c, d, e) {
    if (typeof a !== "string") for (i = 0;
      i < e;
      ++i)a[b + i] = c[d + i];
    else {
      if (b > 0) alert2("string offset is over 0");
      a = c.subarray ? c.subarray(d, e) : c.slice(d, e);
      return a
    }

  }
  function memcpy2(a, b, c, d, e) { } function memcpyArrM(b, c, d, e, f) {
    for (i = 0;
      i < f;
      ++i) {
      let g = b[c + i].length;
      for (let a = 0;
        a < g;
        ++a)b[c + i][a] = d[e + i][a]
    }

  }
  function ArrCopy(a) {
    let b = new Array;
    let c = a.length;
    for (i = 0;
      i < c;
      ++i)b.push(a[i]);
    return b
  }
  function memset_wl(a, b) {
    let c = new Array;
    c.push(newObjectIt(a));
    for (i = 0;
      i < b;
      ++i)c.push(newObjectIt(a));
    c.push(0);
    return c
  }
  function memset(a, b) {
    let c = new Array;
    for (i = 0;
      i < b;
      ++i)c.push(a);
    c.push(0);
    return c
  }
  function membuild_wl(a, b) {
    let c = new Array;
    c.push(newObjectIt(a));
    for (i = 0;
      i < b;
      ++i)c.push(newObjectIt(a));
    c.push(0);
    return c
  }
  function membuild(a, b) {
    let c = new Array;
    for (i = 0;
      i < b;
      ++i)c.push(a);
    c.push(0);
    return c
  }
  function memset_(a, b, c, d) {
    for (i = 0;
      i < d;
      ++i)a[b + i] = c
  }
  function malloc(a, b) {
    let c = new Array;
    for (i = 0;
      i < a;
      ++i)c.push(b);
    c.push(0);
    return c
  }
  function mallocStr(a, b) {
    let c = new Array;
    for (i = 0;
      i < a;
      ++i)c.push(" ");
    return c.join("")
  }
  function sizeof(a) {
    return 1
  }
  function memcmp(a, b, s, c) {
    let w = "";
    for (i = 0;
      i < c;
      ++i)w += String.fromCharCode(a[b + i]);
    if (s == w) return 0;
    else return 1
  }
  function Arr(a, b) {
    let c = new Array;
    for (i = 0;
      i < a;
      ++i)c.push(b);
    return c
  }
  function Arr_nOI(a, b) {
    let c = new Array;
    for (i = 0;
      i < a;
      ++i)c.push(newObjectIt(b));
    return c
  }
  function ArrM(b, c) {
    let d; let resStr = new Array;
    for (a = b.length - 1;
      a >= 0;
      --a)c = newObjectIt(Arr(b[a], c));
    return c
  }
  function assert(a) {
    if (!a) throw new Error("assert :P");
  }
  function WebPDecoder() {
    let ba = function ba() {
      let bb = function () {
        let D = 32768;
        let E = 0;
        let F = 1;
        let G = 2;
        let H = 9;
        let I = 6;
        let J = 32768;
        let K = 64;
        let L;
        let M;
        let N = null;
        let O;
        let P; let fixed_bd;
        let Q;
        let R;
        let S;
        let T;
        let U;
        let V;
        let W; let zip_td;
        let X; let zip_bd;
        let Y;
        let Z;
        let bc = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
        let bd = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0);
        let be = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99);
        let bf = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577);
        let bg = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13);
        let bh = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
        let bi = function () {
          this.next = null;
          this.list = null
        };
        let bj = function () {
          this.e = 0;
          this.b = 0;
          this.n = 0;
          this.t = null
        };
        let bk = function (b, n, s, d, e, l) {
          this.BMAX = 16;
          this.N_MAX = 288;
          this.status = 0;
          this.root = null;
          this.m = 0;
          let a;
          let c = new Array(this.BMAX + 1);
          let m;
          let f;
          let g;
          let h;
          let i;
          let j;
          let k;
          let t = new Array(this.BMAX + 1);
          let p;
          let A;
          let q;
          let r = new bj;
          let u = new Array(this.BMAX);
          let v = new Array(this.N_MAX);
          let w;
          let x = new Array(this.BMAX + 1);
          let B;
          let y;
          let z;
          let o;
          let C;
          C = this.root = null;
          for (i = 0;
            i < c.length;
            i++)c[i] = 0;
          for (i = 0;
            i < t.length;
            i++)t[i] = 0;
          for (i = 0;
            i < u.length;
            i++)u[i] = null;
          for (i = 0;
            i < v.length;
            i++)v[i] = 0;
          for (i = 0;
            i < x.length;
            i++)x[i] = 0;
          m = n > 256 ? b[256] : this.BMAX;
          p = b;
          A = 0;
          i = n;
          do {
            c[p[A]]++;
            A++
          }
          while (--i > 0);
          if (c[0] == n) {
            this.root = null;
            this.m = 0;
            this.status = 0;
            return
          }
          for (j = 1;
            j <= this.BMAX;
            j++)if (c[j] != 0) break;
          k = j;
          if (l < j) l = j;
          for (i = this.BMAX;
            i != 0;
            i--)if (c[i] != 0) break;
          g = i;
          if (l > i) l = i;
          for (y = 1 << j;
            j < i;
            j++, y <<= 1)if ((y -= c[j]) < 0) {
              this.status = 2;
              this.m = l;
              return
            }
          if ((y -= c[i]) < 0) {
            this.status = 2;
            this.m = l;
            return
          }
          c[i] += y;
          x[1] = j = 0;
          p = c;
          A = 1;
          B = 2;
          while (--i > 0) x[B++] = j += p[A++];
          p = b;
          A = 0;
          i = 0;
          do if ((j = p[A++]) != 0) v[x[j]++] = i;
          while (++i < n);
          n = x[g];
          x[0] = i = 0;
          p = v;
          A = 0;
          h = -1;
          w = t[0] = 0;
          q = null;
          z = 0;
          for (;
            k <= g;
            k++) {
            a = c[k];
            while (a-- > 0) {
              while (k > w + t[1 + h]) {
                w += t[1 + h];
                h++;
                z = (z = g - w) > l ? l : z;
                if ((f = 1 << (j = k - w)) > a + 1) {
                  f -= a + 1;
                  B = k;
                  while (++j < z) {
                    if ((f <<= 1) <= c[++B]) break;
                    f -= c[B]
                  }

                }
                if (w + j > m && w < m) j = m - w;
                z = 1 << j;
                t[1 + h] = j;
                q = new Array(z);
                for (o = 0;
                  o < z;
                  o++)q[o] = new bj;
                if (C == null) C = this.root = new bi;
                else C = C.next = new bi;
                C.next = null;
                C.list = q;
                u[h] = q;
                if (h > 0) {
                  x[h] = i;
                  r.b = t[h];
                  r.e = 16 + j;
                  r.t = q;
                  j = (i & (1 << w) - 1) >> w - t[h];
                  u[h - 1][j].e = r.e;
                  u[h - 1][j].b = r.b;
                  u[h - 1][j].n = r.n;
                  u[h - 1][j].t = r.t
                }

              }
              r.b = k - w;
              if (A >= n) r.e = 99;
              else if (p[A] < s) {
                r.e = p[A] < 256 ? 16 : 15;
                r.n = p[A++]
              }
              else {
                r.e = e[p[A] - s];
                r.n = d[p[A++] - s]
              }
              f = 1 << k - w;
              for (j = i >> w;
                j < z;
                j += f) {
                q[j].e = r.e;
                q[j].b = r.b;
                q[j].n = r.n;
                q[j].t = r.t
              }
              for (j = 1 << k - 1;
                (i & j) != 0;
                j >>= 1)i ^= j;
              i ^= j;
              while ((i & (1 << w) - 1) != x[h]) {
                w -= t[h];
                h--
              }

            }

          }
          this.m = t[1];
          this.status = y != 0 && g != 1 ? 1 : 0
        };
        let bl = function () {
          if (Y.length == Z) return -1;
          return Y[Z++]
        };
        let bm = function (n) {
          while (R < n) {
            Q |= bl() << R;
            R += 8
          }

        };
        let bn = function (n) {
          return Q & bc[n]
        };
        let bo = function (n) {
          Q >>= n;
          R -= n
        };
        let bp = function (a, b, c) {
          let e;
          let t;
          let n;
          if (c == 0) return 0;
          n = 0;
          for (;
            ;
          ) {
            bm(X);
            t = W.list[bn(X)];
            e = t.e;
            while (e > 16) {
              if (e == 99) return -1;
              bo(t.b);
              e -= 16;
              bm(e);
              t = t.t[bn(e)];
              e = t.e
            }
            bo(t.b);
            if (e == 16) {
              M &= D - 1;
              a[b + n++] = L[M++] = t.n;
              if (n == c) return c;
              continue
            }
            if (e == 15) break;
            bm(e);
            U = t.n + bn(e);
            bo(e);
            bm(zip_bd);
            t = zip_td.list[bn(zip_bd)];
            e = t.e;
            while (e > 16) {
              if (e == 99) return -1;
              bo(t.b);
              e -= 16;
              bm(e);
              t = t.t[bn(e)];
              e = t.e
            }
            bo(t.b);
            bm(e);
            V = M - t.n - bn(e);
            bo(e);
            while (U > 0 && n < c) {
              U--;
              V &= D - 1;
              M &= D - 1;
              a[b + n++] = L[M++] = L[V++]
            }
            if (n == c) return c
          }
          S = -1;
          return n
        };
        let bq = function (a, b, c) {
          let n;
          n = R & 7;
          bo(n);
          bm(16);
          n = bn(16);
          bo(16);
          bm(16);
          if (n != (~Q & 65535)) return -1;
          bo(16);
          U = n;
          n = 0;
          while (U > 0 && n < c) {
            U--;
            M &= D - 1;
            bm(8);
            a[b + n++] = L[M++] = bn(8);
            bo(8)
          }
          if (U == 0) S = -1;
          return n
        };
        let br = function (a, b, c) {
          if (N == null) {
            let i;
            let l = new Array(288);
            let h;
            for (i = 0;
              i < 144;
              i++)l[i] = 8;
            for (;
              i < 256;
              i++)l[i] = 9;
            for (;
              i < 280;
              i++)l[i] = 7;
            for (;
              i < 288;
              i++)l[i] = 8;
            P = 7;
            h = new bk(l, 288, 257, bd, be, P);
            if (h.status != 0) {
              alert2("HufBuild error: " + h.status);
              return -1
            }
            N = h.root;
            P = h.m;
            for (i = 0;
              i < 30;
              i++)l[i] = 5;
            var d = 5;
            h = new bk(l, 30, 0, bf, bg, d);
            if (h.status > 1) {
              N = null;
              alert2("HufBuild error: " + h.status);
              return -1
            }
            O = h.root;
            d = h.m
          }
          W = N;
          zip_td = O;
          X = P;
          zip_bd = d;
          return bp(a, b, c)
        };
        let bs = function (a, b, c) {
          let i;
          let j;
          let l;
          let n;
          let t;
          let d;
          let e;
          let f;
          let g = new Array(286 + 30);
          let h;
          for (i = 0;
            i < g.length;
            i++)g[i] = 0;
          bm(5);
          e = 257 + bn(5);
          bo(5);
          bm(5);
          f = 1 + bn(5);
          bo(5);
          bm(4);
          d = 4 + bn(4);
          bo(4);
          if (e > 286 || f > 30) return -1;
          for (j = 0;
            j < d;
            j++) {
            bm(3);
            g[bh[j]] = bn(3);
            bo(3)
          }
          for (;
            j < 19;
            j++)g[bh[j]] = 0;
          X = 7;
          h = new bk(g, 19, 19, null, null, X);
          if (h.status != 0) return -1;
          W = h.root;
          X = h.m;
          n = e + f;
          i = l = 0;
          while (i < n) {
            bm(X);
            t = W.list[bn(X)];
            j = t.b;
            bo(j);
            j = t.n;
            if (j < 16) g[i++] = l = j;
            else if (j == 16) {
              bm(2);
              j = 3 + bn(2);
              bo(2);
              if (i + j > n) return -1;
              while (j-- > 0) g[i++] = l
            }
            else if (j == 17) {
              bm(3);
              j = 3 + bn(3);
              bo(3);
              if (i + j > n) return -1;
              while (j-- > 0) g[i++] = 0;
              l = 0
            }
            else {
              bm(7);
              j = 11 + bn(7);
              bo(7);
              if (i + j > n) return -1;
              while (j-- > 0) g[i++] = 0;
              l = 0
            }

          }
          X = H;
          h = new bk(g, e, 257, bd, be, X);
          if (X == 0) h.status = 1;
          if (h.status != 0) {
            if (h.status == 1);
            return -1
          }
          W = h.root;
          X = h.m;
          for (i = 0;
            i < f;
            i++)g[i] = g[i + e];
          zip_bd = I;
          h = new bk(g, f, 0, bf, bg, zip_bd);
          zip_td = h.root;
          zip_bd = h.m;
          if (zip_bd == 0 && e > 257) return -1;
          if (h.status == 1);
          if (h.status != 0) return -1;
          return bp(a, b, c)
        };
        let bt = function () {
          let i;
          if (L == null) L = new Array(2 * D);
          M = 0;
          Q = 0;
          R = 0;
          S = -1;
          T = false;
          U = V = 0;
          W = null
        };
        let bu = function (a, b, c) {
          let n; let i;
          n = 0;
          while (n < c) {
            if (T && S == -1) return n;
            if (U > 0) {
              if (S != E) while (U > 0 && n < c) {
                U--;
                V &= D - 1;
                M &= D - 1;
                a[b + n++] = L[M++] = L[V++]
              }
              else {
                while (U > 0 && n < c) {
                  U--;
                  M &= D - 1;
                  bm(8);
                  a[b + n++] = L[M++] = bn(8);
                  bo(8)
                }
                if (U == 0) S = -1
              }
              if (n == c) return n
            }
            if (S == -1) {
              if (T) break;
              bm(1);
              if (bn(1) != 0) T = true;
              bo(1);
              bm(2);
              S = bn(2);
              bo(2);
              W = null;
              U = 0
            }
            switch (S) {
              case 0: i = bq(a, b + n, c - n);
                break;
              case 1: if (W != null) i = bp(a, b + n, c - n);
              else i = br(a, b + n, c - n);
                break;
              case 2: if (W != null) i = bp(a, b + n, c - n);
              else i = bs(a, b + n, c - n);
                break;
              default: i = -1;
                break
            }
            if (i == -1) {
              if (T) return 0;
              return -1
            }
            n += i
          }
          return n
        };
        let bv = function (a) {
          let i; let j;
          bt();
          Y = a;
          Z = 0;
          let b = [0];
          let c = [];
          while ((i = bu(b, 0, b.length)) > 0) c.push(b[0]);
          Y = null;
          return c
        };
        return bv
      }
        ();
      let bw = function (c) {
        let a = 1; let b = 0;
        let i;
        let d = c.length;
        let e = 65521;
        for (i = 0;
          i < d;
          i += 1) {
          a = (a + c[i]) % e;
          b = (b + a) % e
        }
        return b << 16 | a
      };
      let bx = function (a, b) {
        let i;
        let c = bw(a);
        let d = Deflate(a, b);
        a = d;
        a.unshift(120, 1);
        for (i = 0;
          i < 4;
          ++i)a.push(c >> (3 - i) * 8 & 255);
        return a
      };
      let by = function (a) {
        if (a.length < 6) throw "DataError: Not enough input";
        let b = bb(a.subarray ? a.subarray(2, a.length - 4) : a.slice(2, a.length - 4));
        if (a.length > 6 && b.length === 0) throw "DataError: Unable to inflate the data";
        return b
      };
      return {
        "inflate": bb, "uncompress": by
      }

    }
      ();
    let bz = 2;
    let bA = 0; let MODE_RGBA = 1; let MODE_BGR = 2; let MODE_BGRA = 3; let MODE_ARGB = 4; let MODE_RGBA_4444 = 5; let MODE_RGB_565 = 6; let MODE_YUV = 7; let MODE_YUVA = 8; let MODE_LAST = 9;
    this.WEBP_CSP_MODE = {
      MODE_RGB: 0, MODE_RGBA: 1, MODE_BGR: 2, MODE_BGRA: 3, MODE_ARGB: 4, MODE_RGBA_4444: 5, MODE_RGB_565: 6, MODE_YUV: 7, MODE_YUVA: 8, MODE_LAST: 9
    };
    let bB = {
      rgba: uint8_t, rgba_off: 0, stride: int_, size: int_
    };
    let bC = {
      y: uint8_t, u: uint8_t, v: uint8_t, a: uint8_t, y_off: uint8_t, u_off: uint8_t, v_off: uint8_t, a_off: uint8_t, y_stride: int_, u_stride: int_, v_stride: int_, a_stride: int_, y_size: int_, u_size: int_, v_size: int_, a_size: int_
    };
    let bD = {
      colorspace: "WEBP_CSP_MODE", width: int_, height: int_, is_external_memory: int_, u: {
        RGBA: bB, YUVA: bC
      }
      , private_memory: null, private_memory_off: uint8_t
    };
    function WebPInitDecBuffer(a) {
      return WebPInitDecBufferInternal(a, bz)
    }
    let bE = 0; let VP8_STATUS_OUT_OF_MEMORY = 1; let VP8_STATUS_INVALID_PARAM = 2; let VP8_STATUS_BITSTREAM_ERROR = 3; let VP8_STATUS_UNSUPPORTED_FEATURE = 4; let VP8_STATUS_SUSPENDED = 5; let VP8_STATUS_USER_ABORT = 6; let VP8_STATUS_NOT_ENOUGH_DATA = 7;
    this.VP8StatusCode = {
      VP8_STATUS_OK: 0, VP8_STATUS_OUT_OF_MEMORY: 1, VP8_STATUS_INVALID_PARAM: 2, VP8_STATUS_BITSTREAM_ERROR: 3, VP8_STATUS_UNSUPPORTED_FEATURE: 4, VP8_STATUS_SUSPENDED: 5, VP8_STATUS_USER_ABORT: 6, VP8_STATUS_NOT_ENOUGH_DATA: 7
    };
    let bF = {
      width: {
        value: int_
      }
      , height: {
        value: int_
      }
      , has_alpha: {
        value: int_
      }
      , no_incremental_decoding: int_, rotate: int_, uv_sampling: int_, bitstream_version: int_
    };
    this.WebPGetFeatures = function (a, b, c) {
      return WebPGetFeaturesInternal(a, b, c, bz)
    };
    let bG = {
      bypass_filtering: int_, no_fancy_upsampling: int_, use_cropping: int_, crop_left: int_, crop_top: int_, crop_width: int_, crop_height: int_, use_scaling: int_, scaled_width: int_, scaled_height: int_, force_rotation: int_, no_enhancement: int_, use_threads: int_
    };
    this.WebPDecoderConfig = {
      input: newObjectIt(bF), output: newObjectIt(bD), options: newObjectIt(bG)
    };
    this.WebPInitDecoderConfig = function (a) {
      return WebPInitDecoderConfigInternal(a, bz)
    };
    let bH = {
      width: int_, height: int_, mb_y: int_, mb_w: int_, mb_h: int_, y: uint8_t, u: uint8_t, v: uint8_t, y_off: 0, u_off: 0, v_off: 0, y_stride: int_, uv_stride: int_, opaque: void_, put: 0, setup: 0, teardown: 0, fancy_upsampling: int_, data_size: uint32_t, data: uint8_t, data_off: 0, bypass_filtering: int_, use_cropping: int_, crop_left: int_, crop_right: int_, crop_top: int_, crop_bottom: int_, use_scaling: int_, scaled_width: int_, scaled_height: int_, a: uint8_t, a_off: 0
    };
    function VP8InitIo(a) {
      return VP8InitIoInternal(a, bz)
    }
    let bI = {
      output: newObjectIt(bD), tmp_y: uint8_t, tmp_u: uint8_t, tmp_v: uint8_t, tmp_y_off: 0, tmp_u_off: 0, tmp_v_off: 0, last_y: int_, options_: newObjectIt(bG), memory: void_, emit: "(OutputFunc)", emit_alpha: "(OutputFunc)"
    };
    let bJ = {
      buf_: uint8_t, buf_off: null, buf_end_: uint8_t, eof_: int_, range_: uint32_t, value_: uint32_t, missing_: int_
    };
    function VP8Get(a) {
      return VP8GetValue(a, 1)
    }
    function VP8GetByte(a) {
      assert(a);
      if (a.buf_off < a.buf_end_) {
        assert(a.buf_);
        return a.buf_[a.buf_off++]
      }
      a.eof_ = 1;
      return 255
    }
    function VP8BitUpdate(a, b) {
      let c = uint32_t;
      let d = b + 1 << 8;
      if (a.missing_ > 0) {
        a.value_ |= VP8GetByte(a) << a.missing_;
        a.missing_ -= 8
      }
      c = (a.value_ >= d) + 0;
      if (c) {
        a.range_ -= b + 1;
        a.value_ -= d
      }
      else a.range_ = b;
      return c
    }
    function VP8Shift(a) {
      let b = bK[a.range_];
      a.range_ = bL[a.range_];
      a.value_ <<= b;
      a.missing_ += b
    }
    function VP8GetBit(a, b) {
      let c = a.range_ * b >> 8;
      let d = VP8BitUpdate(a, c);
      if (a.range_ < 127) VP8Shift(a);
      return d
    }
    function VP8GetSigned(a, v) {
      let b = a.range_ >> 1;
      let c = VP8BitUpdate(a, b);
      VP8Shift(a);
      return c ? -v : v
    }
    function VP8InitBitReader(a, b, c, d) {
      assert(a);
      assert(b);
      assert(d);
      a.range_ = 255 - 1;
      a.buf_ = b;
      a.buf_off = c;
      a.buf_end_ = d;
      a.value_ = 0;
      a.missing_ = 8;
      a.eof_ = 0
    }
    var bK = new Array(7, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    var bL = new Array(127, 127, 191, 127, 159, 191, 223, 127, 143, 159, 175, 191, 207, 223, 239, 127, 135, 143, 151, 159, 167, 175, 183, 191, 199, 207, 215, 223, 231, 239, 247, 127, 131, 135, 139, 143, 147, 151, 155, 159, 163, 167, 171, 175, 179, 183, 187, 191, 195, 199, 203, 207, 211, 215, 219, 223, 227, 231, 235, 239, 243, 247, 251, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201, 203, 205, 207, 209, 211, 213, 215, 217, 219, 221, 223, 225, 227, 229, 231, 233, 235, 237, 239, 241, 243, 245, 247, 249, 251, 253, 127);
    function VP8GetValue(a, b) {
      let v = 0;
      while (b-- > 0) v |= VP8GetBit(a, 128) << b;
      return v
    }
    function VP8GetSignedValue(a, b) {
      let c = VP8GetValue(a, b);
      return VP8Get(a) ? -c : c
    }
    let bM = 0;
    let bN = 1;
    let bO = 2;
    let bP = 0; let B_TM_PRED = 1; let B_VE_PRED = 2; let B_HE_PRED = 3; let B_RD_PRED = 4; let B_VR_PRED = 5; let B_LD_PRED = 6; let B_VL_PRED = 7; let B_HD_PRED = 8; let B_HU_PRED = 9; let NUM_BMODES = B_HU_PRED + 1 - bP; let DC_PRED = bP; let V_PRED = B_VE_PRED; let H_PRED = B_HE_PRED; let TM_PRED = B_TM_PRED; let B_PRED = NUM_BMODES; let B_DC_PRED_NOTOP = 4; let B_DC_PRED_NOLEFT = 5; let B_DC_PRED_NOTOPLEFT = 6; let NUM_B_DC_MODES = 7;
    let bQ = 3; let NUM_MB_SEGMENTS = 4; let NUM_REF_LF_DELTAS = 4; let NUM_MODE_LF_DELTAS = 4; let MAX_NUM_PARTITIONS = 8; let NUM_TYPES = 4; let NUM_BANDS = 8; let NUM_CTX = 3; let NUM_PROBAS = 11; let NUM_MV_PROBAS = 19;
    let bR = 32;
    let bS = bR * 17 + bR * 9;
    let bT = bR * 17;
    let bU = Number(bR) + 8;
    let bV = bU + bR * 16 + bR;
    let bW = bV + 16;
    let bX = {
      key_frame_: uint8_t, profile_: uint8_t, show_: uint8_t, partition_length_: uint32_t
    };
    let bY = {
      width_: uint16_t, height_: uint16_t, xscale_: uint8_t, yscale_: uint8_t, colorspace_: uint8_t, clamp_type_: uint8_t
    };
    let bZ = {
      use_segment_: int_, update_map_: int_, absolute_delta_: int_, quantizer_: Arr(NUM_MB_SEGMENTS, int8_t), filter_strength_: Arr(NUM_MB_SEGMENTS, int8_t)
    };
    let ca = {
      segments_: Arr(bQ, uint8_t), coeffs_: ArrM(new Array(NUM_TYPES, NUM_BANDS, NUM_CTX, NUM_PROBAS), uint8_t)
    };
    let cb = {
      simple_: int_, level_: int_, sharpness_: int_, use_lf_delta_: int_, ref_lf_delta_: Arr(NUM_REF_LF_DELTAS, int_), mode_lf_delta_: Arr(NUM_REF_LF_DELTAS, int_)
    };
    let cc = {
      f_level_: int_, f_ilevel_: int_, f_inner_: int_
    };
    let cd = {
      nz_: int_, dc_nz_: int_, skip_: int_
    };
    let ce = {
      y1_mat_: Arr(2, uint16_t), y2_mat_: Arr(2, uint16_t), uv_mat_: Arr(2, uint16_t)
    };
    let cf = {
      id_: int_, mb_y_: int_, filter_row_: int_, f_info_: cc, io_: bH
    };
    let cg = {
      status_: "VP8StatusCode", ready_: int_, error_msg_: char_, br_: newObjectIt(bJ), frm_hdr_: newObjectIt(bX), pic_hdr_: newObjectIt(bY), filter_hdr_: newObjectIt(cb), segment_hdr_: newObjectIt(bZ), worker_: "WebPWorker", use_threads_: int_, cache_id_: int_, num_caches_: int_, thread_ctx_: cf, mb_w_: int_, mb_h_: int_, tl_mb_x_: int_, tl_mb_y_: int_, br_mb_x_: int_, br_mb_y_: int_, num_parts_: int_, parts_: Arr_nOI(MAX_NUM_PARTITIONS, bJ), buffer_flags_: uint32_t, dqm_: Arr_nOI(NUM_MB_SEGMENTS, ce), proba_: newObjectIt(ca), use_skip_proba_: int_, skip_p_: uint8_t, intra_t_: uint8_t, intra_l_: Arr(4, uint8_t), y_t_: uint8_t, u_t_: uint8_t, v_t_: uint8_t, mb_info_: newObjectIt(cd), f_info_: newObjectIt(cc), yuv_b_: uint8_t, coeffs_: int16_t, cache_y_: uint8_t, cache_u_: uint8_t, cache_v_: uint8_t, cache_y_off: int_, cache_u_off: int_, cache_v_off: int_, cache_y_stride_: int_, cache_uv_stride_: int_, mem_: void_, mem_size_: int_, mb_x_: int_, mb_y_: int_, is_i4x4_: uint8_t, imodes_: Arr(16, uint8_t), imodes_offset_: 0, uvmode_: uint8_t, segment_: uint8_t, non_zero_: uint32_t, non_zero_ac_: uint32_t, filter_type_: int_, filter_row_: int_, filter_levels_: Arr(NUM_MB_SEGMENTS, uint8_t), alpha_data_: uint8_t, alpha_data_off: 0, alpha_data_size_: size_t, alpha_plane_: uint8_t, alpha_plane_off: 0, layer_colorspace_: int_, layer_data_: uint8_t, layer_data_off: 0, layer_data_size_: size_t
    };
    function VP8DecompressAlphaRows(a, b, c) {
      let d = a.alpha_plane_;
      let e = a.pic_hdr_.width_;
      if (b < 0 || b + c > a.pic_hdr_.height_) return null;
      if (b == 0) {
        let f = a.alpha_data_;
        let g = a.alpha_data_off;
        let h = a.alpha_data_size_;
        let i = e * a.pic_hdr_.height_;
        d = ba.uncompress(f.subarray ? f.subarray(g, g + h) : f.slice(g, g + h))
      }
      return b == 0 ? d : Number(b) * e
    }
    let ci = new Array(3, 4, 3, 4, 4, 2, 2, 1, 1);
    function CheckDecBuffer(a) {
      let b = 1;
      let c = a.colorspace;
      let d = a.width;
      let e = a.height;
      if (c >= MODE_YUV);
      else {
        let f = a.u.RGBA;
        b &= f.stride * e <= f.size;
        b &= f.stride >= d * ci[c]
      }
      return b ? bE : VP8_STATUS_INVALID_PARAM
    }
    function AllocateBuffer(a) {
      let w = a.width;
      let h = a.height;
      if (w <= 0 || h <= 0) return VP8_STATUS_INVALID_PARAM;
      if (!a.is_external_memory && a.private_memory == null) {
        let b = uint8_t;
        let c = 0;
        let d = a.colorspace;
        let e = int_;
        let f = 0; let a_stride = 0;
        let g = 0;
        let i = uint64_t; let a_size = 0; let total_size = uint64_t;
        e = w * ci[d];
        i = e * h;
        if (d >= MODE_YUV) {
          f = parseInt((w + 1) / 2);
          g = f * parseInt((h + 1) / 2);
          if (d == MODE_YUVA) {
            a_stride = w;
            a_size = a_stride * h
          }

        }
        total_size = i + 2 * g + a_size;
        if (total_size != total_size) return VP8_STATUS_INVALID_PARAM;
        a.private_memory = b = malloc(total_size, size_t);
        a.private_memory_off = c = 0;
        if (b == null) return VP8_STATUS_OUT_OF_MEMORY;
        if (d >= MODE_YUV);
        else {
          let j = a.u.RGBA;
          j.rgba = b;
          j.rgba_off = c;
          j.stride = e;
          j.size = i
        }

      }
      return CheckDecBuffer(a)
    }
    function WebPAllocateDecBuffer(w, h, a, b) {
      if (b == null || w <= 0 || h <= 0) return VP8_STATUS_INVALID_PARAM;
      b.width = w;
      b.height = h;
      return AllocateBuffer(b)
    }
    function WebPInitDecBufferInternal(a, b) {
      if (b != bz) return 0;
      if (!a) return 0;
      memset_(a, 0, 0, sizeof(a) * a.length);
      return 1
    }
    this.WebPFreeDecBuffer = function (a) {
      if (a) {
        if (!a.is_external_memory) a.private_memory = "";
        a.private_memory_off = 0;
        a.private_memory = a.private_memory_off = null
      }

    };
    function WebPCopyDecBuffer(a, b) {
      alert2("todo: WebPCopyDecBuffer")
    }
    function WebPGrabDecBuffer(a, b) {
      alert2("todo: WebPGrabDecBuffer")
    }
    function VP8DecodeLayer(a) {
      assert(a);
      assert(a.layer_data_size_ > 0);
      return 1
    }
    let cj = Arr(255 + 255 + 1, uint8_t);
    let ck = Arr(255 + 255 + 1, uint8_t);
    let cl = Arr(1020 + 1020 + 1, int8_t);
    let cm = Arr(112 + 112 + 1, int8_t);
    let cn = Arr(255 + 510 + 1, uint8_t);
    let co = 0;
    function VP8DspInitTables(a) {
      if (!co) {
        let i;
        for (i = -255;
          i <= 255;
          ++i) {
          cj[255 + i] = i < 0 ? -i : i;
          ck[255 + i] = cj[255 + i] >> 1
        }
        for (i = -1020;
          i <= 1020;
          ++i)cl[1020 + i] = i < -128 ? -128 : i > 127 ? 127 : i;
        for (i = -112;
          i <= 112;
          ++i)cm[112 + i] = i < -16 ? -16 : i > 15 ? 15 : i;
        for (i = -255;
          i <= 255 + 255;
          ++i)cn[255 + i] = i < 0 ? 0 : i > 255 ? 255 : i;
        co = 1
      }

    }
    function clip_8b(v) {
      return !(v & ~255) ? v : v < 0 ? 0 : 255
    }
    function STORE(x, y, v) {
      dst[dst_off + x + y * bR] = clip_8b(dst_off + dst[x + y * bR] + (v >> 3))
    }
    let cp = 20091 + (1 << 16);
    let cq = 35468;
    function MUL(a, b) {
      return a * b >> 16
    }
    function TransformOne(e, f, g, h) {
      let C = Arr(4 * 4, 0); let tmp; let tmp_off;
      tmp_off = 0;
      let i;
      tmp = C;
      for (i = 0;
        i < 4;
        ++i) {
        var a = e[f + 0] + e[f + 8];
        var b = e[f + 0] - e[f + 8];
        var c = MUL(e[f + 4], cq) - MUL(e[f + 12], cp);
        var d = MUL(e[f + 4], cp) + MUL(e[f + 12], cq);
        tmp[tmp_off + 0] = a + d;
        tmp[tmp_off + 1] = b + c;
        tmp[tmp_off + 2] = b - c;
        tmp[tmp_off + 3] = a - d;
        tmp_off += 4;
        f++
      }
      tmp_off = 0;
      for (i = 0;
        i < 4;
        ++i) {
        let j = tmp[tmp_off + 0] + 4;
        var a = j + tmp[tmp_off + 8];
        var b = j - tmp[tmp_off + 8];
        var c = MUL(tmp[tmp_off + 4], cq) - MUL(tmp[tmp_off + 12], cp);
        var d = MUL(tmp[tmp_off + 4], cp) + MUL(tmp[tmp_off + 12], cq);
        g[h + 0 + 0 * bR] = clip_8b(g[h + 0 + 0 * bR] + (a + d >> 3));
        g[h + 1 + 0 * bR] = clip_8b(g[h + 1 + 0 * bR] + (b + c >> 3));
        g[h + 2 + 0 * bR] = clip_8b(g[h + 2 + 0 * bR] + (b - c >> 3));
        g[h + 3 + 0 * bR] = clip_8b(g[h + 3 + 0 * bR] + (a - d >> 3));
        tmp_off++;
        h += bR
      }

    }
    function TransformTwo(a, b, c, d, e) {
      TransformOne(a, b, c, d);
      if (e) TransformOne(a, b + 16, c, d + 4)
    }
    function TransformUV(a, b, c, d) {
      cu(a, b + 0 * 16, c, d + 0, 1);
      cu(a, b + 2 * 16, c, d + 4 * bR, 1)
    }
    function TransformDC(a, b, c, d) {
      let e = a[b + 0] + 4;
      let i; let j;
      for (j = 0;
        j < 4;
        ++j)for (i = 0;
          i < 4;
          ++i) {
          let f = c[d + i + j * bR];
          c[d + i + j * bR] = clip_8b(c[d + i + j * bR] + (e >> 3))
        }

    }
    function TransformDCUV(a, b, c, d) {
      if (a[b + 0 * 16]) TransformDC(a, b + 0 * 16, c, d + 0);
      if (a[b + 1 * 16]) TransformDC(a, b + 1 * 16, c, d + 4);
      if (a[b + 2 * 16]) TransformDC(a, b + 2 * 16, c, d + 4 * bR);
      if (a[b + 3 * 16]) TransformDC(a, b + 3 * 16, c, d + 4 * bR + 4)
    }
    function TransformWHT(a, b) {
      let c = Arr(16, int_);
      let i = int_;
      for (i = 0;
        i < 4;
        ++i) {
        var d = a[0 + i] + a[12 + i];
        var e = a[4 + i] + a[8 + i];
        var f = a[4 + i] - a[8 + i];
        var g = a[0 + i] - a[12 + i];
        c[0 + i] = d + e;
        c[8 + i] = d - e;
        c[4 + i] = g + f;
        c[12 + i] = g - f
      }
      for (i = 0;
        i < 4;
        ++i) {
        let h = b[b.length - 1];
        let j = c[0 + i * 4] + 3;
        var d = j + c[3 + i * 4];
        var e = c[1 + i * 4] + c[2 + i * 4];
        var f = c[1 + i * 4] - c[2 + i * 4];
        var g = j - c[3 + i * 4];
        b[h + 0] = d + e >> 3;
        b[h + 16] = g + f >> 3;
        b[h + 32] = d - e >> 3;
        b[h + 48] = g - f >> 3;
        b[b.length - 1] += 64
      }

    }
    function VP8TransformWHT(a, b) {
      TransformWHT(a, b)
    }
    function OUT(x, y) {
      dst[x + y * bR]
    }
    function TrueMotion(a, b, c) {
      let d = a;
      let e = b - bR;
      let f = cn;
      let g = +255 - d[e - 1];
      let y;
      for (y = 0;
        y < c;
        ++y) {
        let h = f;
        let i = g + a[b - 1];
        var x;
        for (x = 0;
          x < c;
          ++x)a[b + x] = h[i + d[e + x]];
        b += bR
      }

    }
    function TM4(a, b) {
      TrueMotion(a, b, 4)
    }
    function TM8uv(a, b) {
      TrueMotion(a, b, 8)
    }
    function TM16(a, b) {
      TrueMotion(a, b, 16)
    }
    function VE16(a, b) {
      let j;
      for (j = 0;
        j < 16;
        ++j)memcpy(a, b + j * bR, a, b - bR, 16)
    }
    function HE16(a, b) {
      let j;
      for (j = 16;
        j > 0;
        --j) {
        memset_(a, b + 0, a[b - 1], 16);
        b += bR
      }

    }
    function Put16(v, a, b) {
      let j;
      for (j = 0;
        j < 16;
        ++j)for (i = 0;
          i < 16;
          ++i)a[b + j * bR + i] = v
    }
    function DC16(a, b) {
      let c = 16;
      let j;
      for (j = 0;
        j < 16;
        ++j)c += a[b - 1 + j * bR] + a[b + j - bR];
      Put16(c >> 5, a, b)
    }
    function DC16NoTop(a, b) {
      let c = 8;
      let j;
      for (j = 0;
        j < 16;
        ++j)c += a[b - 1 + j * bR];
      Put16(c >> 4, a, b)
    }
    function DC16NoLeft(a, b) {
      let c = 8;
      let i;
      for (i = 0;
        i < 16;
        ++i)c += a[b + i - bR];
      Put16(c >> 4, a, b)
    }
    function DC16NoTopLeft(a, b) {
      Put16(128, a, b)
    }
    function AVG3(a, b, c) {
      return a + 2 * b + c + 2 >> 2
    }
    function AVG2(a, b) {
      return a + b + 1 >> 1
    }
    function VE4(a, b) {
      let c = a;
      let d = b - bR;
      let e = new Array;
      e.push(AVG3(c[d - 1], c[d + 0], c[d + 1]));
      e.push(AVG3(c[d + 0], c[d + 1], c[d + 2]));
      e.push(AVG3(c[d + 1], c[d + 2], c[d + 3]));
      e.push(AVG3(c[d + 2], c[d + 3], c[d + 4]));
      let i;
      for (i = 0;
        i < 4;
        ++i)memcpy(a, b + i * bR, e, 0, 4 * sizeof(e))
    }
    function HE4(a, b) {
      let A = a[b - 1 - bR];
      let B = a[b - 1];
      let C = a[b - 1 + bR];
      let D = a[b - 1 + 2 * bR];
      let E = a[b - 1 + 3 * bR];
      a[b + 0 + 0 * bR] = a[b + 1 + 0 * bR] = a[b + 2 + 0 * bR] = a[b + 3 + 0 * bR] = AVG3(A, B, C);
      a[b + 0 + Number(bR)] = a[b + 1 + Number(bR)] = a[b + 2 + Number(bR)] = a[b + 3 + Number(bR)] = AVG3(B, C, D);
      a[b + 0 + 2 * bR] = a[b + 1 + 2 * bR] = a[b + 2 + 2 * bR] = a[b + 3 + 2 * bR] = AVG3(C, D, E);
      a[b + 0 + 3 * bR] = a[b + 1 + 3 * bR] = a[b + 2 + 3 * bR] = a[b + 3 + 3 * bR] = AVG3(D, E, E)
    }
    function DC4(a, b) {
      let c = 4;
      let i;
      for (i = 0;
        i < 4;
        ++i)c += a[b + i - bR] + a[b - 1 + i * bR];
      c >>= 3;
      for (i = 0;
        i < 4;
        ++i)memset_(a, b + i * bR, c, 4)
    }
    function RD4(a, b) {
      let I = a[b - 1 + 0 * bR];
      let J = a[b - 1 + Number(bR)];
      let K = a[b - 1 + 2 * bR];
      let L = a[b - 1 + 3 * bR];
      let X = a[b - 1 - bR];
      let A = a[b + 0 - bR];
      let B = a[b + 1 - bR];
      let C = a[b + 2 - bR];
      let D = a[b + 3 - bR];
      a[b + 0 + 3 * bR] = AVG3(J, K, L);
      a[b + 0 + 2 * bR] = a[b + 1 + 3 * bR] = AVG3(I, J, K);
      a[b + 0 + Number(bR)] = a[b + 1 + 2 * bR] = a[b + 2 + 3 * bR] = AVG3(X, I, J);
      a[b + 0 + 0 * bR] = a[b + 1 + Number(bR)] = a[b + 2 + 2 * bR] = a[b + 3 + 3 * bR] = AVG3(A, X, I);
      a[b + 1 + 0 * bR] = a[b + 2 + Number(bR)] = a[b + 3 + 2 * bR] = AVG3(B, A, X);
      a[b + 2 + 0 * bR] = a[b + 3 + Number(bR)] = AVG3(C, B, A);
      a[b + 3 + 0 * bR] = AVG3(D, C, B)
    }
    function LD4(a, b) {
      let A = a[b + 0 - bR];
      let B = a[b + 1 - bR];
      let C = a[b + 2 - bR];
      let D = a[b + 3 - bR];
      let E = a[b + 4 - bR];
      let F = a[b + 5 - bR];
      let G = a[b + 6 - bR];
      let H = a[b + 7 - bR];
      a[b + 0 + 0 * bR] = AVG3(A, B, C);
      a[b + 1 + 0 * bR] = a[b + 0 + Number(bR)] = AVG3(B, C, D);
      a[b + 2 + 0 * bR] = a[b + 1 + Number(bR)] = a[b + 0 + 2 * bR] = AVG3(C, D, E);
      a[b + 3 + 0 * bR] = a[b + 2 + Number(bR)] = a[b + 1 + 2 * bR] = a[b + 0 + 3 * bR] = AVG3(D, E, F);
      a[b + 3 + Number(bR)] = a[b + 2 + 2 * bR] = a[b + 1 + 3 * bR] = AVG3(E, F, G);
      a[b + 3 + 2 * bR] = a[b + 2 + 3 * bR] = AVG3(F, G, H);
      a[b + 3 + 3 * bR] = AVG3(G, H, H)
    }
    function VR4(a, b) {
      let I = a[b - 1 + 0 * bR];
      let J = a[b - 1 + Number(bR)];
      let K = a[b - 1 + 2 * bR];
      let X = a[b - 1 - bR];
      let A = a[b + 0 - bR];
      let B = a[b + 1 - bR];
      let C = a[b + 2 - bR];
      let D = a[b + 3 - bR];
      a[b + 0 + 0 * bR] = a[b + 1 + 2 * bR] = AVG2(X, A);
      a[b + 1 + 0 * bR] = a[b + 2 + 2 * bR] = AVG2(A, B);
      a[b + 2 + 0 * bR] = a[b + 3 + 2 * bR] = AVG2(B, C);
      a[b + 3 + 0 * bR] = AVG2(C, D);
      a[b + 0 + 3 * bR] = AVG3(K, J, I);
      a[b + 0 + 2 * bR] = AVG3(J, I, X);
      a[b + 0 + Number(bR)] = a[b + 1 + 3 * bR] = AVG3(I, X, A);
      a[b + 1 + Number(bR)] = a[b + 2 + 3 * bR] = AVG3(X, A, B);
      a[b + 2 + Number(bR)] = a[b + 3 + 3 * bR] = AVG3(A, B, C);
      a[b + 3 + Number(bR)] = AVG3(B, C, D)
    }
    function VL4(a, b) {
      let A = a[b + 0 - bR];
      let B = a[b + 1 - bR];
      let C = a[b + 2 - bR];
      let D = a[b + 3 - bR];
      let E = a[b + 4 - bR];
      let F = a[b + 5 - bR];
      let G = a[b + 6 - bR];
      let H = a[b + 7 - bR];
      a[b + 0 + 0 * bR] = AVG2(A, B);
      a[b + 1 + 0 * bR] = a[b + 0 + 2 * bR] = AVG2(B, C);
      a[b + 2 + 0 * bR] = a[b + 1 + 2 * bR] = AVG2(C, D);
      a[b + 3 + 0 * bR] = a[b + 2 + 2 * bR] = AVG2(D, E);
      a[b + 0 + Number(bR)] = AVG3(A, B, C);
      a[b + 1 + Number(bR)] = a[b + 0 + 3 * bR] = AVG3(B, C, D);
      a[b + 2 + Number(bR)] = a[b + 1 + 3 * bR] = AVG3(C, D, E);
      a[b + 3 + Number(bR)] = a[b + 2 + 3 * bR] = AVG3(D, E, F);
      a[b + 3 + 2 * bR] = AVG3(E, F, G);
      a[b + 3 + 3 * bR] = AVG3(F, G, H)
    }
    function HU4(a, b) {
      let I = a[b - 1 + 0 * bR];
      let J = a[b - 1 + Number(bR)];
      let K = a[b - 1 + 2 * bR];
      let L = a[b - 1 + 3 * bR];
      a[b + 0 + 0 * bR] = AVG2(I, J);
      a[b + 2 + 0 * bR] = a[b + 0 + Number(bR)] = AVG2(J, K);
      a[b + 2 + Number(bR)] = a[b + 0 + 2 * bR] = AVG2(K, L);
      a[b + 1 + 0 * bR] = AVG3(I, J, K);
      a[b + 3 + 0 * bR] = a[b + 1 + Number(bR)] = AVG3(J, K, L);
      a[b + 3 + Number(bR)] = a[b + 1 + 2 * bR] = AVG3(K, L, L);
      a[b + 3 + 2 * bR] = a[b + 2 + 2 * bR] = a[b + 0 + 3 * bR] = a[b + 1 + 3 * bR] = a[b + 2 + 3 * bR] = a[b + 3 + 3 * bR] = L
    }
    function HD4(a, b) {
      let I = a[b - 1 + 0 * bR];
      let J = a[b - 1 + Number(bR)];
      let K = a[b - 1 + 2 * bR];
      let L = a[b - 1 + 3 * bR];
      let X = a[b - 1 - bR];
      let A = a[b + 0 - bR];
      let B = a[b + 1 - bR];
      let C = a[b + 2 - bR];
      a[b + 0 + 0 * bR] = a[b + 2 + Number(bR)] = AVG2(I, X);
      a[b + 0 + Number(bR)] = a[b + 2 + 2 * bR] = AVG2(J, I);
      a[b + 0 + 2 * bR] = a[b + 2 + 3 * bR] = AVG2(K, J);
      a[b + 0 + 3 * bR] = AVG2(L, K);
      a[b + 3 + 0 * bR] = AVG3(A, B, C);
      a[b + 2 + 0 * bR] = AVG3(X, A, B);
      a[b + 1 + 0 * bR] = a[b + 3 + Number(bR)] = AVG3(I, X, A);
      a[b + 1 + Number(bR)] = a[b + 3 + 2 * bR] = AVG3(J, I, X);
      a[b + 1 + 2 * bR] = a[b + 3 + 3 * bR] = AVG3(K, J, I);
      a[b + 1 + 3 * bR] = AVG3(L, K, J)
    }
    function VE8uv(a, b) {
      let j;
      for (j = 0;
        j < 8;
        ++j)memcpy(a, b + j * bR, a, b - bR, 8)
    }
    function HE8uv(a, b) {
      let j;
      for (j = 0;
        j < 8;
        ++j) {
        memset_(a, b + 0, a[b - 1], 8);
        b += bR
      }

    }
    function Put8x8uv(v, a, b) {
      let j; let k;
      for (j = 0;
        j < 8;
        ++j)for (k = 0;
          k < 8;
          ++k)a[b + k + j * bR] = v
    }
    function DC8uv(a, b) {
      let c = 8;
      let i;
      for (i = 0;
        i < 8;
        ++i)c += a[b + i - bR] + a[b - 1 + i * bR];
      Put8x8uv((c >> 4) * 1, a, b)
    }
    function DC8uvNoLeft(a, b) {
      let c = 4;
      let i;
      for (i = 0;
        i < 8;
        ++i)c += a[b + i - bR];
      Put8x8uv((c >> 3) * 1, a, b)
    }
    function DC8uvNoTop(a, b) {
      let c = 4;
      let i;
      for (i = 0;
        i < 8;
        ++i)c += a[b - 1 + i * bR];
      Put8x8uv((c >> 3) * 1, a, b)
    }
    function DC8uvNoTopLeft(a, b) {
      Put8x8uv(128, a, b)
    }
    let cr = new Array(function (v, o) {
      DC4(v, o)
    }
      , function (v, o) {
        TM4(v, o)
      }
      , function (v, o) {
        VE4(v, o)
      }
      , function (v, o) {
        HE4(v, o)
      }
      , function (v, o) {
        RD4(v, o)
      }
      , function (v, o) {
        VR4(v, o)
      }
      , function (v, o) {
        LD4(v, o)
      }
      , function (v, o) {
        VL4(v, o)
      }
      , function (v, o) {
        HD4(v, o)
      }
      , function (v, o) {
        HU4(v, o)
      });
    let cs = new Array(function (v, o) {
      DC16(v, o)
    }
      , function (v, o) {
        TM16(v, o)
      }
      , function (v, o) {
        VE16(v, o)
      }
      , function (v, o) {
        HE16(v, o)
      }
      , function (v, o) {
        DC16NoTop(v, o)
      }
      , function (v, o) {
        DC16NoLeft(v, o)
      }
      , function (v, o) {
        DC16NoTopLeft(v, o)
      });
    let ct = new Array(function (v, o) {
      DC8uv(v, o)
    }
      , function (v, o) {
        TM8uv(v, o)
      }
      , function (v, o) {
        VE8uv(v, o)
      }
      , function (v, o) {
        HE8uv(v, o)
      }
      , function (v, o) {
        DC8uvNoTop(v, o)
      }
      , function (v, o) {
        DC8uvNoLeft(v, o)
      }
      , function (v, o) {
        DC8uvNoTopLeft(v, o)
      });
    function do_filter2(p, b, c) {
      let d = p[b - 2 * c]; let p0 = p[b - c]; let q0 = p[b + 0]; let q1 = p[b + c];
      let a = 3 * (q0 - p0) + cl[1020 + d - q1];
      let e = cm[112 + (a + 4 >> 3)];
      let f = cm[112 + (a + 3 >> 3)];
      p[b - c] = cn[255 + p0 + f];
      p[b + 0] = cn[255 + q0 - e]
    }
    function do_filter4(p, b, c) {
      let d = p[b - 2 * c]; let p0 = p[b - c]; let q0 = p[b + 0]; let q1 = p[b + c];
      let a = 3 * (q0 - p0);
      let e = cm[112 + (a + 4 >> 3)];
      let f = cm[112 + (a + 3 >> 3)];
      let g = e + 1 >> 1;
      p[b - 2 * c] = cn[255 + d + g];
      p[b - c] = cn[255 + p0 + f];
      p[b + 0] = cn[255 + q0 - e];
      p[b + c] = cn[255 + q1 - g]
    }
    function do_filter6(p, b, c) {
      let d = p[b - 3 * c]; let p1 = p[b - 2 * c]; let p0 = p[b - c];
      let e = p[b + 0]; let q1 = p[b + c]; let q2 = p[b + 2 * c];
      let a = cl[1020 + 3 * (e - p0) + cl[1020 + p1 - q1]];
      let f = 27 * a + 63 >> 7;
      let g = 18 * a + 63 >> 7;
      let h = 9 * a + 63 >> 7;
      p[b - 3 * c] = cn[255 + d + h];
      p[b - 2 * c] = cn[255 + p1 + g];
      p[b - c] = cn[255 + p0 + f];
      p[b + 0] = cn[255 + e - f];
      p[b + c] = cn[255 + q1 - g];
      p[b + 2 * c] = cn[255 + q2 - h]
    }
    function hev(p, a, b, c) {
      let d = p[a - 2 * b]; let p0 = p[a - b]; let q0 = p[a + 0]; let q1 = p[a + b];
      return cj[255 + d - p0] > c || cj[255 + q1 - q0] > c
    }
    function needs_filter(p, a, b, c) {
      let d = p[a - 2 * b]; let p0 = p[a - b]; let q0 = p[a + 0]; let q1 = p[a + b];
      return 2 * cj[255 + p0 - q0] + ck[255 + d - q1] <= c
    }
    function needs_filter2(p, a, b, t, c) {
      let d = p[a - 4 * b]; let p2 = p[a - 3 * b]; let p1 = p[a - 2 * b]; let p0 = p[a - b];
      let e = p[a + 0]; let q1 = p[a + b]; let q2 = p[a + 2 * b]; let q3 = p[a + 3 * b];
      if (2 * cj[255 + p0 - e] + ck[255 + p1 - q1] > t) return 0;
      return cj[255 + d - p2] <= c && cj[255 + p2 - p1] <= c && cj[255 + p1 - p0] <= c && cj[255 + q3 - q2] <= c && cj[255 + q2 - q1] <= c && cj[255 + q1 - e] <= c
    }
    function SimpleVFilter16(p, a, b, c) {
      let i;
      for (i = 0;
        i < 16;
        ++i)if (needs_filter(p, a + i, b, c)) do_filter2(p, a + i, b)
    }
    function SimpleHFilter16(p, a, b, c) {
      let i;
      for (i = 0;
        i < 16;
        ++i)if (needs_filter(p, a + i * b, 1, c)) do_filter2(p, a + i * b, 1)
    }
    function SimpleVFilter16i(p, a, b, c) {
      let k;
      for (k = 3;
        k > 0;
        --k) {
        a += 4 * b;
        SimpleVFilter16(p, a + 0, b, c)
      }

    }
    function SimpleHFilter16i(p, a, b, c) {
      let k;
      for (k = 3;
        k > 0;
        --k) {
        a += 4;
        SimpleHFilter16(p, a + 0, b, c)
      }

    }
    function FilterLoop26(p, a, b, c, d, e, f, g) {
      while (d-- > 0) {
        if (needs_filter2(p, a + 0, b, e, f)) if (hev(p, a + 0, b, g)) do_filter2(p, a + 0, b);
        else do_filter6(p, a + 0, b);
        a += c
      }

    }
    function FilterLoop24(p, a, b, c, d, e, f, g) {
      while (d-- > 0) {
        if (needs_filter2(p, a + 0, b, e, f)) if (hev(p, a + 0, b, g)) do_filter2(p, a + 0, b);
        else do_filter4(p, a + 0, b);
        a += c
      }

    }
    function VFilter16(p, a, b, c, d, e) {
      FilterLoop26(p, a + 0, b, 1, 16, c, d, e)
    }
    function HFilter16(p, a, b, c, d, e) {
      FilterLoop26(p, a + 0, 1, b, 16, c, d, e)
    }
    function VFilter16i(p, a, b, c, d, e) {
      let k;
      for (k = 3;
        k > 0;
        --k) {
        a += 4 * b;
        FilterLoop24(p, a + 0, b, 1, 16, c, d, e)
      }

    }
    function HFilter16i(p, a, b, c, d, e) {
      let k;
      for (k = 3;
        k > 0;
        --k) {
        a += 4;
        FilterLoop24(p, a + 0, 1, b, 16, c, d, e)
      }

    }
    function VFilter8(u, a, v, b, c, d, e, f) {
      FilterLoop26(u, a, c, 1, 8, d, e, f);
      FilterLoop26(v, b, c, 1, 8, d, e, f)
    }
    function HFilter8(u, a, v, b, c, d, e, f) {
      FilterLoop26(u, a, 1, c, 8, d, e, f);
      FilterLoop26(v, b, 1, c, 8, d, e, f)
    }
    function VFilter8i(u, a, v, b, c, d, e, f) {
      FilterLoop24(u, a + 4 * c, c, 1, 8, d, e, f);
      FilterLoop24(v, b + 4 * c, c, 1, 8, d, e, f)
    }
    function HFilter8i(u, a, v, b, c, d, e, f) {
      FilterLoop24(u, a + 4, 1, c, 8, d, e, f);
      FilterLoop24(v, b + 4, 1, c, 8, d, e, f)
    }
    let cu;
    let cv;
    let cw;
    let cx;
    let cy;
    let cz;
    let cA;
    let cB;
    let cC;
    let cD;
    let cE;
    let cF;
    let cG;
    let cH;
    let cI;
    let cJ;
    function VP8DspInit(a) {
      cu = TransformTwo;
      cv = TransformUV;
      cw = TransformDC;
      cx = TransformDCUV;
      cy = VFilter16;
      cz = HFilter16;
      cA = VFilter8;
      cB = HFilter8;
      cC = VFilter16i;
      cD = HFilter16i;
      cE = VFilter8i;
      cF = HFilter8i;
      cG = SimpleVFilter16;
      cH = SimpleHFilter16;
      cI = SimpleVFilter16i;
      cJ = SimpleHFilter16i
    }
    let cK = 32 - 1;
    let cL = 3;
    let cM = 1;
    function InitThreadContext(a) {
      a.cache_id_ = 0;
      if (a.use_threads_);
      else a.num_caches_ = cM;
      return 1
    }
    let cN = new Array(0, 2, 8);
    function AllocateMemory(a) {
      let b = a.num_caches_;
      let c = a.mb_w_;
      let d = 4 * c * sizeof(uint8_t);
      let e = (16 + 8 + 8) * c;
      let f = (c + 1) * sizeof(cd);
      let g = a.filter_type_ > 0 ? c * (a.use_threads_ ? 2 : 1) * sizeof(cc) : 0;
      let h = bS * sizeof(a.yuv_b_);
      let i = 384 * sizeof(a.coeffs_);
      let j = 16 * b + parseInt(cN[a.filter_type_]) * 3 / 2;
      let k = e * j;
      let l = a.alpha_data_ ? a.pic_hdr_.width_ * a.pic_hdr_.height_ : 0;
      let m = d + e + f + g + h + i + k + l + cK;
      let n = uint8_t; let mem_offset = 0;
      if (m > a.mem_size_) {
        a.mem_ = 0;
        a.mem_size_ = 0;
        if (a.mem_ == null) return VP8SetError(a, "VP8_STATUS_OUT_OF_MEMORY", "no memory during frame initialization.");
        a.mem_size_ = m
      }
      n = a.mem_;
      a.intra_t_ = 205;
      a.y_t_ = memset(205, 16 * c * sizeof(a.y_t_));
      a.u_t_ = memset(205, 8 * c * sizeof(a.u_t_));
      a.v_t_ = memset(205, 8 * c * sizeof(a.v_t_));
      a.f_info_ = g ? memset_wl(cc, g) : null;
      a.f_info_off = g ? 0 : null;
      a.thread_ctx_.id_ = 0;
      a.thread_ctx_.f_info_ = a.f_info_;
      if (a.use_threads_);
      assert((h & cK) == 0);
      a.yuv_b_ = memset(205, h * sizeof(a.yuv_b_));
      a.coeffs_ = -12851;
      a.cache_y_stride_ = 16 * c;
      a.cache_uv_stride_ = 8 * c;
      let o = cN[a.filter_type_];
      let p = o * a.cache_y_stride_;
      let q = o / 2 * a.cache_uv_stride_;
      a.cache_y_ = Arr(k, 205);
      a.cache_y_off = Number(p);
      a.cache_u_ = a.cache_y_;
      a.cache_u_off = a.cache_y_off + 16 * b * a.cache_y_stride_ + q;
      a.cache_v_ = a.cache_u_;
      a.cache_v_off = a.cache_u_off + 8 * b * a.cache_uv_stride_ + q;
      a.alpha_plane_ = l ? Arr(l, uint8_t) : null;
      a.mb_info_ = memset_wl(cd, f);
      a.intra_t_ = memset(bP, d);
      return 1
    }
    function InitIo(a, b) {
      b.width = a.pic_hdr_.width_;
      b.height = a.pic_hdr_.height_;
      b.mb_y = 0;
      b.y = a.cache_y_;
      b.y_off = a.cache_y_off;
      b.u = a.cache_u_;
      b.u_off = a.cache_u_off;
      b.v = a.cache_v_;
      b.v_off = a.cache_v_off;
      b.y_stride = a.cache_y_stride_;
      b.uv_stride = a.cache_uv_stride_;
      b.fancy_upsampling = 0;
      b.a = null;
      b.a_off = null
    }
    function VP8InitFrame(a, b) {
      if (!InitThreadContext(a)) return 0;
      if (!AllocateMemory(a)) return 0;
      InitIo(a, b);
      VP8DspInitTables();
      VP8DspInit();
      return 1
    }
    function hev_thresh_from_level(a, b) {
      if (b) return a >= 40 ? 2 : a >= 15 ? 1 : 0;
      else return a >= 40 ? 3 : a >= 20 ? 2 : a >= 15 ? 1 : 0
    }
    function DoFilter(a, b, c) {
      let d = a.thread_ctx_;
      let e = a.cache_y_stride_;
      let f = d.f_info_[1 + b];
      let g = a.cache_y_;
      let h = a.cache_y_off + d.id_ * 16 * e + b * 16;
      let i = f.f_level_;
      let j = f.f_ilevel_;
      let k = 2 * i + j;
      if (i == 0) return;
      if (a.filter_type_ == 1) {
        if (b > 0) cH(g, h, e, k + 4);
        if (f.f_inner_) cJ(g, h, e, k);
        if (c > 0) cG(g, h, e, k + 4);
        if (f.f_inner_) cI(g, h, e, k)
      }
      else {
        let l = a.cache_uv_stride_;
        let m = a.cache_u_;
        let n = a.cache_u_off + d.id_ * 8 * l + b * 8;
        let o = a.cache_v_;
        let p = a.cache_v_off + d.id_ * 8 * l + b * 8;
        let q = hev_thresh_from_level(i, a.frm_hdr_.key_frame_);
        if (b > 0) {
          cz(g, h, e, k + 4, j, q);
          cB(m, n, o, p, l, k + 4, j, q)
        }
        if (f.f_inner_) {
          cD(g, h, e, k, j, q);
          cF(m, n, o, p, l, k, j, q)
        }
        if (c > 0) {
          cy(g, h, e, k + 4, j, q);
          cA(m, n, o, p, l, k + 4, j, q)
        }
        if (f.f_inner_) {
          cC(g, h, e, k, j, q);
          cE(m, n, o, p, l, k, j, q)
        }

      }

    }
    function FilterRow(a) {
      let b = int_;
      let c = a.thread_ctx_.mb_y_;
      assert(a.thread_ctx_.filter_row_);
      for (b = a.tl_mb_x_;
        b < a.br_mb_x_;
        ++b)DoFilter(a, b, c)
    }
    function VP8StoreBlock(a) {
      if (a.filter_type_ > 0) {
        let b = a.f_info_[1 + a.mb_x_];
        let c = a.mb_info_[1 + a.mb_x_].skip_;
        let d = a.filter_levels_[a.segment_];
        if (a.filter_hdr_.use_lf_delta_) {
          d += a.filter_hdr_.ref_lf_delta_[0];
          if (a.is_i4x4_) d += a.filter_hdr_.mode_lf_delta_[0]
        }
        d = d < 0 ? 0 : d > 63 ? 63 : d;
        b.f_level_ = d;
        if (a.filter_hdr_.sharpness_ > 0) {
          if (a.filter_hdr_.sharpness_ > 4) d >>= 2;
          else d >>= 1;
          if (d > 9 - a.filter_hdr_.sharpness_) d = 9 - a.filter_hdr_.sharpness_
        }
        b.f_ilevel_ = d < 1 ? 1 : d;
        b.f_inner_ = (!c || a.is_i4x4_) + 0
      }
      let y;
      let e = a.cache_id_ * 16 * a.cache_y_stride_;
      let f = a.cache_id_ * 8 * a.cache_uv_stride_;
      let g = a.cache_y_;
      let h = a.cache_y_off + a.mb_x_ * 16 + e;
      let i = a.cache_u_;
      let j = a.cache_u_off + a.mb_x_ * 8 + f;
      let k = a.cache_v_;
      let l = a.cache_v_off + a.mb_x_ * 8 + f;
      for (y = 0;
        y < 16;
        ++y)memcpy(g, h + y * a.cache_y_stride_, a.yuv_b_, Number(bU) + y * bR, 16);
      for (y = 0;
        y < 8;
        ++y) {
        memcpy(i, j + y * a.cache_uv_stride_, a.yuv_b_, Number(bV) + y * bR, 8);
        memcpy(k, l + y * a.cache_uv_stride_, a.yuv_b_, Number(bW) + y * bR, 8)
      }

    }
    function MACROBLOCK_VPOS(a) {
      return a * 16
    }
    function VP8FinishRow(a, b) {
      let c = 1;
      let d = a.thread_ctx_;
      let e = cN[a.filter_type_];
      let f = e * a.cache_y_stride_;
      let g = parseInt(e / 2) * a.cache_uv_stride_;
      let h = d.id_ * 16 * a.cache_y_stride_;
      let i = d.id_ * 8 * a.cache_uv_stride_;
      let j = a.cache_y_;
      let k = a.cache_y_off - f + h;
      let l = a.cache_u_;
      let m = a.cache_u_off - g + i;
      let n = a.cache_v_;
      let o = a.cache_v_off - g + i;
      let p = d.mb_y_ == 0;
      let q = (d.mb_y_ >= a.mb_h_ - 1) + 0;
      let r = MACROBLOCK_VPOS(d.mb_y_);
      let s = MACROBLOCK_VPOS(d.mb_y_ + 1);
      if (d.filter_row_) FilterRow(a);
      if (b.put) {
        if (!p) {
          r -= e;
          b.y = j;
          b.y_off = k;
          b.u = l;
          b.u_off = m;
          b.v = n;
          b.v_off = o
        }
        else {
          b.y = a.cache_y_;
          b.y_off = a.cache_y_off + h;
          b.u = a.cache_u_;
          b.u_off = a.cache_u_off + i;
          b.v = a.cache_v_;
          b.v_off = a.cache_v_off + i
        }
        if (!q) s -= e;
        if (s > b.crop_bottom) s = b.crop_bottom;
        if (a.alpha_data_) {
          if (r == 0) {
            b.a = VP8DecompressAlphaRows(a, r, s - r);
            b.a_off = 0
          }
          else b.a_off = VP8DecompressAlphaRows(a, r, s - r);
          if (b.a == null) return VP8SetError(a, VP8_STATUS_BITSTREAM_ERROR, "Could not decode alpha data.")
        }
        if (r < b.crop_top) {
          let t = b.crop_top - r;
          r = b.crop_top;
          assert(!(t & 1));
          b.y_off += a.cache_y_stride_ * t;
          b.u_off += a.cache_uv_stride_ * (t >> 1);
          b.v_off += a.cache_uv_stride_ * (t >> 1);
          if (b.a) b.a_off += b.width * t
        }
        if (r < s) {
          b.y_off += b.crop_left;
          b.u_off += b.crop_left >> 1;
          b.v_off += b.crop_left >> 1;
          if (b.a) b.a_off += b.crop_left;
          b.mb_y = r - b.crop_top;
          b.mb_w = b.crop_right - b.crop_left;
          b.mb_h = s - r;
          c = b.put(b)
        }

      }
      if (d.id_ + 1 == a.num_caches_) if (!q) {
        memcpy(a.cache_y_, a.cache_y_off - f, j, k + 16 * a.cache_y_stride_, f);
        memcpy(a.cache_u_, a.cache_u_off - g, l, m + 8 * a.cache_uv_stride_, g);
        memcpy(a.cache_v_, a.cache_v_off - g, n, o + 8 * a.cache_uv_stride_, g)
      }
      return c
    }
    function VP8ProcessRow(a, b) {
      let c = 1;
      let d = a.thread_ctx_;
      if (!a.use_threads_) {
        d.mb_y_ = a.mb_y_;
        d.filter_row_ = a.filter_row_;
        c = VP8FinishRow(a, b)
      }
      return c
    }
    function VP8EnterCritical(a, b) {
      if (b.setup && !b.setup(b)) {
        VP8SetError(a, VP8_STATUS_USER_ABORT, "Frame setup failed");
        return a.status_
      }
      if (b.bypass_filtering) a.filter_type_ = 0;
      let c = cN[a.filter_type_];
      if (a.filter_type_ == 2) {
        a.tl_mb_x_ = 0;
        a.tl_mb_y_ = 0
      }
      else {
        a.tl_mb_y_ = b.crop_top >> 4;
        a.tl_mb_x_ = b.crop_left >> 4
      }
      a.br_mb_y_ = b.crop_bottom + 15 + c >> 4;
      a.br_mb_x_ = b.crop_right + 15 + c >> 4;
      if (a.br_mb_x_ > a.mb_w_) a.br_mb_x_ = a.mb_w_;
      if (a.br_mb_y_ > a.mb_h_) a.br_mb_y_ = a.mb_h_;
      return bE
    }
    function VP8ExitCritical(a, b) {
      let c = 1;
      if (a.use_threads_);
      if (b.teardown) b.teardown(b);
      return c
    }
    let cO = new Array(0 + 0 * bR, 4 + 0 * bR, 8 + 0 * bR, 12 + 0 * bR, 0 + 4 * bR, 4 + 4 * bR, 8 + 4 * bR, 12 + 4 * bR, 0 + 8 * bR, 4 + 8 * bR, 8 + 8 * bR, 12 + 8 * bR, 0 + 12 * bR, 4 + 12 * bR, 8 + 12 * bR, 12 + 12 * bR);
    function CheckMode(a, b) {
      if (b == bP) if (a.mb_x_ == 0) return a.mb_y_ == 0 ? B_DC_PRED_NOTOPLEFT : B_DC_PRED_NOLEFT;
      else return a.mb_y_ == 0 ? B_DC_PRED_NOTOP : bP;
      return b
    }
    function Copy32b(a, b, c, d) {
      for (i = 0;
        i < 4;
        ++i)a[b + i] = c[d + i]
    }
    function VP8ReconstructBlock(a) {
      let b = a.yuv_b_;
      let c = bU;
      let d = a.yuv_b_;
      let e = bV;
      let f = a.yuv_b_;
      let g = bW;
      if (a.mb_x_ > 0) {
        var j;
        for (j = -1;
          j < 16;
          ++j)Copy32b(b, c + j * bR - 4, b, c + j * bR + 12);
        for (j = -1;
          j < 8;
          ++j) {
          Copy32b(d, e + j * bR - 4, d, e + j * bR + 4);
          Copy32b(f, g + j * bR - 4, f, g + j * bR + 4)
        }

      }
      else {
        var j;
        for (j = 0;
          j < 16;
          ++j)b[c + j * bR - 1] = 129;
        for (j = 0;
          j < 8;
          ++j) {
          d[e + j * bR - 1] = 129;
          f[g + j * bR - 1] = 129
        }
        if (a.mb_y_ > 0) b[c - 1 - bR] = d[e - 1 - bR] = f[g - 1 - bR] = 129
      }
      let h = a.y_t_;
      let k = Number(a.mb_x_) * 16;
      let l = a.u_t_;
      let m = Number(a.mb_x_) * 8;
      let o = a.v_t_;
      let p = Number(a.mb_x_) * 8;
      let q = a.coeffs_;
      let n;
      if (a.mb_y_ > 0) {
        memcpy(b, c - bR, h, k, 16);
        memcpy(d, e - bR, l, m, 8);
        memcpy(f, g - bR, o, p, 8)
      }
      else if (a.mb_x_ == 0) {
        for (i = 0;
          i < 16 + 4 + 1;
          ++i)b[c - bR - 1 + i] = 127;
        for (i = 0;
          i < 8 + 1;
          ++i)d[e - bR - 1 + i] = 127;
        for (i = 0;
          i < 8 + 1;
          ++i)f[g - bR - 1 + i] = 127
      }
      if (a.is_i4x4_) {
        let r = b;
        let s = c - bR + 16;
        if (a.mb_y_ > 0) if (a.mb_x_ >= a.mb_w_ - 1) r[s + 0] = r[s + 1] = r[s + 2] = r[s + 3] = h[k + 15];
        else memcpy(r, s + 0, h, k + 16, 4);
        for (ii = 0;
          ii < 4;
          ++ii)r[ii + s + bR * 4] = r[ii + s + Number(bR) * 4] = r[ii + s + 2 * bR * 4] = r[ii + s + 3 * bR * 4] = r[ii + s + 0 * 4];
        for (n = 0;
          n < 16;
          n++) {
          var t = b;
          var u = c + cO[n];
          cr[a.imodes_[n]](t, u);
          if (a.non_zero_ac_ & 1 << n) cu(q, Number(n) * 16, t, u, 0);
          else if (a.non_zero_ & 1 << n) cw(q, Number(n) * 16, t, u)
        }

      }
      else {
        var v = CheckMode(a, a.imodes_[0]);
        cs[v](b, c);
        if (a.non_zero_) for (n = 0;
          n < 16;
          n++) {
          var t = b;
          var u = c + cO[n];
          if (a.non_zero_ac_ & 1 << n) cu(q, Number(n) * 16, t, u, 0);
          else if (a.non_zero_ & 1 << n) cw(q, Number(n) * 16, t, u)
        }

      }
      var v = CheckMode(a, a.uvmode_);
      ct[v](d, e);
      ct[v](f, g);
      if (a.non_zero_ & 983040) {
        let w = a.coeffs_;
        var x = 16 * 16;
        if (a.non_zero_ac_ & 983040) cv(w, x, d, e);
        else cx(w, x, d, e)
      }
      if (a.non_zero_ & 15728640) {
        let y = a.coeffs_;
        var x = 20 * 16;
        if (a.non_zero_ac_ & 15728640) cv(y, x, f, g);
        else cx(y, x, f, g)
      }
      if (a.mb_y_ < a.mb_h_ - 1) {
        memcpy(h, k, b, c + 15 * bR, 16);
        memcpy(l, m, d, e + 7 * bR, 8);
        memcpy(o, p, f, g + 7 * bR, 8)
      }

    }
    function clip(v, M) {
      return v < 0 ? 0 : v > M ? M : v
    }
    let cP = new Array(4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157);
    let cQ = new Array(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284);
    function VP8ParseQuant(a) {
      let b = a.br_;
      let c = VP8GetValue(b, 7);
      let d = VP8Get(b) ? VP8GetSignedValue(b, 4) : 0;
      let e = VP8Get(b) ? VP8GetSignedValue(b, 4) : 0;
      let f = VP8Get(b) ? VP8GetSignedValue(b, 4) : 0;
      let g = VP8Get(b) ? VP8GetSignedValue(b, 4) : 0;
      let h = VP8Get(b) ? VP8GetSignedValue(b, 4) : 0;
      let j = a.segment_hdr_;
      let i = int_;
      for (i = 0;
        i < NUM_MB_SEGMENTS;
        ++i) {
        let q = int_;
        if (j.use_segment_) {
          q = j.quantizer_[i];
          if (!j.absolute_delta_) q += c
        }
        else if (i > 0) {
          a.dqm_[i] = a.dqm_[0];
          continue
        }
        else q = c;
        let m = a.dqm_[i];
        m.y1_mat_[0] = cP[clip(q + d, 127)];
        m.y1_mat_[1] = cQ[clip(q + 0, 127)];
        m.y2_mat_[0] = cP[clip(q + e, 127)] * 2;
        m.y2_mat_[1] = parseInt(cQ[clip(q + f, 127)] * 155 / 100);
        if (m.y2_mat_[1] < 8) m.y2_mat_[1] = 8;
        m.uv_mat_[0] = cP[clip(q + g, 117)];
        m.uv_mat_[1] = cQ[clip(q + h, 127)]
      }

    }
    let cR = new Array(-bP, 1, -B_TM_PRED, 2, -B_VE_PRED, 3, 4, 6, -B_HE_PRED, 5, -B_RD_PRED, -B_VR_PRED, -B_LD_PRED, 7, -B_VL_PRED, 8, -B_HD_PRED, -B_HU_PRED);
    let cS = new Array(new Array(new Array(new Array(128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128), new Array(128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128), new Array(128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128)), new Array(new Array(253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128), new Array(189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128), new Array(106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128)), new Array(new Array(1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128), new Array(181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128), new Array(78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128)), new Array(new Array(1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128), new Array(184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128), new Array(77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128)), new Array(new Array(1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128), new Array(170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128), new Array(37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128)), new Array(new Array(1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128), new Array(207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128), new Array(102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128)), new Array(new Array(1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128), new Array(177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128), new Array(80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128)), new Array(new Array(1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128), new Array(246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128), new Array(255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128))), new Array(new Array(new Array(198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62), new Array(131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1), new Array(68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128)), new Array(new Array(1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128), new Array(184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128), new Array(81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128)), new Array(new Array(1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128), new Array(99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128), new Array(23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128)), new Array(new Array(1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128), new Array(109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128), new Array(44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128)), new Array(new Array(1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128), new Array(94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128), new Array(22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128)), new Array(new Array(1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128), new Array(124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128), new Array(35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128)), new Array(new Array(1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128), new Array(121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128), new Array(45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128)), new Array(new Array(1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128), new Array(203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128), new Array(137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128))), new Array(new Array(new Array(253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128), new Array(175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128), new Array(73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128)), new Array(new Array(1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128), new Array(239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128), new Array(155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128)), new Array(new Array(1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128), new Array(201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128), new Array(69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128)), new Array(new Array(1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128), new Array(223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128), new Array(141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128)), new Array(new Array(1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128), new Array(190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128), new Array(149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128)), new Array(new Array(1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128), new Array(247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128), new Array(240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128)), new Array(new Array(1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128), new Array(213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128), new Array(55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128)), new Array(new Array(128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128), new Array(128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128), new Array(128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128))), new Array(new Array(new Array(202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255), new Array(126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128), new Array(61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128)), new Array(new Array(1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128), new Array(166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128), new Array(39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128)), new Array(new Array(1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128), new Array(124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128), new Array(24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128)), new Array(new Array(1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128), new Array(149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128), new Array(28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128)), new Array(new Array(1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128), new Array(123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128), new Array(20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128)), new Array(new Array(1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128), new Array(168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128), new Array(47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128)), new Array(new Array(1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128), new Array(141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128), new Array(42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128)), new Array(new Array(1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128), new Array(244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128), new Array(238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128))));
    let cT = new Array(new Array(new Array(231, 120, 48, 89, 115, 113, 120, 152, 112), new Array(152, 179, 64, 126, 170, 118, 46, 70, 95), new Array(175, 69, 143, 80, 85, 82, 72, 155, 103), new Array(56, 58, 10, 171, 218, 189, 17, 13, 152), new Array(114, 26, 17, 163, 44, 195, 21, 10, 173), new Array(121, 24, 80, 195, 26, 62, 44, 64, 85), new Array(144, 71, 10, 38, 171, 213, 144, 34, 26), new Array(170, 46, 55, 19, 136, 160, 33, 206, 71), new Array(63, 20, 8, 114, 114, 208, 12, 9, 226), new Array(81, 40, 11, 96, 182, 84, 29, 16, 36)), new Array(new Array(134, 183, 89, 137, 98, 101, 106, 165, 148), new Array(72, 187, 100, 130, 157, 111, 32, 75, 80), new Array(66, 102, 167, 99, 74, 62, 40, 234, 128), new Array(41, 53, 9, 178, 241, 141, 26, 8, 107), new Array(74, 43, 26, 146, 73, 166, 49, 23, 157), new Array(65, 38, 105, 160, 51, 52, 31, 115, 128), new Array(104, 79, 12, 27, 217, 255, 87, 17, 7), new Array(87, 68, 71, 44, 114, 51, 15, 186, 23), new Array(47, 41, 14, 110, 182, 183, 21, 17, 194), new Array(66, 45, 25, 102, 197, 189, 23, 18, 22)), new Array(new Array(88, 88, 147, 150, 42, 46, 45, 196, 205), new Array(43, 97, 183, 117, 85, 38, 35, 179, 61), new Array(39, 53, 200, 87, 26, 21, 43, 232, 171), new Array(56, 34, 51, 104, 114, 102, 29, 93, 77), new Array(39, 28, 85, 171, 58, 165, 90, 98, 64), new Array(34, 22, 116, 206, 23, 34, 43, 166, 73), new Array(107, 54, 32, 26, 51, 1, 81, 43, 31), new Array(68, 25, 106, 22, 64, 171, 36, 225, 114), new Array(34, 19, 21, 102, 132, 188, 16, 76, 124), new Array(62, 18, 78, 95, 85, 57, 50, 48, 51)), new Array(new Array(193, 101, 35, 159, 215, 111, 89, 46, 111), new Array(60, 148, 31, 172, 219, 228, 21, 18, 111), new Array(112, 113, 77, 85, 179, 255, 38, 120, 114), new Array(40, 42, 1, 196, 245, 209, 10, 25, 109), new Array(88, 43, 29, 140, 166, 213, 37, 43, 154), new Array(61, 63, 30, 155, 67, 45, 68, 1, 209), new Array(100, 80, 8, 43, 154, 1, 51, 26, 71), new Array(142, 78, 78, 16, 255, 128, 34, 197, 171), new Array(41, 40, 5, 102, 211, 183, 4, 1, 221), new Array(51, 50, 17, 168, 209, 192, 23, 25, 82)), new Array(new Array(138, 31, 36, 171, 27, 166, 38, 44, 229), new Array(67, 87, 58, 169, 82, 115, 26, 59, 179), new Array(63, 59, 90, 180, 59, 166, 93, 73, 154), new Array(40, 40, 21, 116, 143, 209, 34, 39, 175), new Array(47, 15, 16, 183, 34, 223, 49, 45, 183), new Array(46, 17, 33, 183, 6, 98, 15, 32, 183), new Array(57, 46, 22, 24, 128, 1, 54, 17, 37), new Array(65, 32, 73, 115, 28, 128, 23, 128, 205), new Array(40, 3, 9, 115, 51, 192, 18, 6, 223), new Array(87, 37, 9, 115, 59, 77, 64, 21, 47)), new Array(new Array(104, 55, 44, 218, 9, 54, 53, 130, 226), new Array(64, 90, 70, 205, 40, 41, 23, 26, 57), new Array(54, 57, 112, 184, 5, 41, 38, 166, 213), new Array(30, 34, 26, 133, 152, 116, 10, 32, 134), new Array(39, 19, 53, 221, 26, 114, 32, 73, 255), new Array(31, 9, 65, 234, 2, 15, 1, 118, 73), new Array(75, 32, 12, 51, 192, 255, 160, 43, 51), new Array(88, 31, 35, 67, 102, 85, 55, 186, 85), new Array(56, 21, 23, 111, 59, 205, 45, 37, 192), new Array(55, 38, 70, 124, 73, 102, 1, 34, 98)), new Array(new Array(125, 98, 42, 88, 104, 85, 117, 175, 82), new Array(95, 84, 53, 89, 128, 100, 113, 101, 45), new Array(75, 79, 123, 47, 51, 128, 81, 171, 1), new Array(57, 17, 5, 71, 102, 57, 53, 41, 49), new Array(38, 33, 13, 121, 57, 73, 26, 1, 85), new Array(41, 10, 67, 138, 77, 110, 90, 47, 114), new Array(115, 21, 2, 10, 102, 255, 166, 23, 6), new Array(101, 29, 16, 10, 85, 128, 101, 196, 26), new Array(57, 18, 10, 102, 102, 213, 34, 20, 43), new Array(117, 20, 15, 36, 163, 128, 68, 1, 26)), new Array(new Array(102, 61, 71, 37, 34, 53, 31, 243, 192), new Array(69, 60, 71, 38, 73, 119, 28, 222, 37), new Array(68, 45, 128, 34, 1, 47, 11, 245, 171), new Array(62, 17, 19, 70, 146, 85, 55, 62, 70), new Array(37, 43, 37, 154, 100, 163, 85, 160, 1), new Array(63, 9, 92, 136, 28, 64, 32, 201, 85), new Array(75, 15, 9, 9, 64, 255, 184, 119, 16), new Array(86, 6, 28, 5, 64, 255, 25, 248, 1), new Array(56, 8, 17, 132, 137, 255, 55, 116, 128), new Array(58, 15, 20, 82, 135, 57, 26, 121, 40)), new Array(new Array(164, 50, 31, 137, 154, 133, 25, 35, 218), new Array(51, 103, 44, 131, 131, 123, 31, 6, 158), new Array(86, 40, 64, 135, 148, 224, 45, 183, 128), new Array(22, 26, 17, 131, 240, 154, 14, 1, 209), new Array(45, 16, 21, 91, 64, 222, 7, 1, 197), new Array(56, 21, 39, 155, 60, 138, 23, 102, 213), new Array(83, 12, 13, 54, 192, 255, 68, 47, 28), new Array(85, 26, 85, 85, 128, 128, 32, 146, 171), new Array(18, 11, 7, 63, 144, 171, 4, 4, 246), new Array(35, 27, 10, 146, 174, 171, 12, 26, 128)), new Array(new Array(190, 80, 35, 99, 180, 80, 126, 54, 45), new Array(85, 126, 47, 87, 176, 51, 41, 20, 32), new Array(101, 75, 128, 139, 118, 146, 116, 128, 85), new Array(56, 41, 15, 176, 236, 85, 37, 9, 62), new Array(71, 30, 17, 119, 118, 255, 17, 18, 138), new Array(101, 38, 60, 138, 55, 70, 43, 26, 142), new Array(146, 36, 19, 30, 171, 255, 97, 27, 20), new Array(138, 45, 61, 62, 219, 1, 81, 188, 64), new Array(32, 41, 20, 117, 151, 142, 20, 21, 163), new Array(112, 19, 12, 61, 195, 128, 48, 4, 24)));
    function VP8ResetProba(a) {
      for (i = 0;
        i < a.segments_.length;
        ++i)a.segments_[i] = 255;
      a.coeffs_ = newObjectIt(cS)
    }
    function VP8ParseIntraMode(a, b) {
      let c = b.intra_t_;
      c[c.length - 1] = 0 + 4 * b.mb_x_;
      let d = b.intra_l_;
      b.is_i4x4_ = !VP8GetBit(a, 145);
      if (!b.is_i4x4_) {
        var e = VP8GetBit(a, 156) ? VP8GetBit(a, 128) ? TM_PRED : H_PRED : VP8GetBit(a, 163) ? V_PRED : DC_PRED;
        b.imodes_[0] = e;
        for (i = 0;
          i < 4;
          ++i)c[i + c[c.length - 1]] = e;
        for (i = 0;
          i < 4;
          ++i)d[i] = e
      }
      else {
        let f = b.imodes_;
        let g = 0;
        let y;
        for (y = 0;
          y < 4;
          ++y) {
          var e = d[y];
          var x;
          for (x = 0;
            x < 4;
            ++x) {
            let h = cT[c[c[c.length - 1] + x]][e];
            var i = 0;
            do i = cR[2 * i + VP8GetBit(a, h[i])];
            while (i > 0);
            e = -i;
            c[c[c.length - 1] + x] = e;
            f[g] = e;
            g++
          }
          d[y] = e
        }

      }
      b.uvmode_ = !VP8GetBit(a, 142) ? DC_PRED : !VP8GetBit(a, 114) ? V_PRED : VP8GetBit(a, 183) ? TM_PRED : H_PRED
    }
    let cU = new Array(new Array(new Array(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255), new Array(249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255), new Array(234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255), new Array(250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255), new Array(254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255))), new Array(new Array(new Array(217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255), new Array(234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255)), new Array(new Array(255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255), new Array(250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255))), new Array(new Array(new Array(186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255), new Array(234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255), new Array(251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255)), new Array(new Array(255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255))), new Array(new Array(new Array(248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255), new Array(248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255), new Array(246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255), new Array(252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255), new Array(248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255), new Array(253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255), new Array(252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255), new Array(250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255)), new Array(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255), new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255))));
    function VP8ParseProba(a, d) {
      let e = d.proba_;
      let t; let b; let c; let p;
      for (t = 0;
        t < NUM_TYPES;
        ++t)for (b = 0;
          b < NUM_BANDS;
          ++b)for (c = 0;
            c < NUM_CTX;
            ++c)for (p = 0;
              p < NUM_PROBAS;
              ++p)if (VP8GetBit(a, cU[t][b][c][p])) e.coeffs_[t][b][c][p] = VP8GetValue(a, 8);
      d.use_skip_proba_ = VP8Get(a);
      if (d.use_skip_proba_) d.skip_p_ = VP8GetValue(a, 8)
    }
    var cV = 12;
    let cW = 20;
    this.WebPGetDecoderVersion = function (a) {
      return bM << 16 | bN << 8 | bO
    };
    function SetOk(a) {
      a.status_ = "VP8_STATUS_OK";
      a.error_msg_ = "OK"
    }
    let cX;
    function VP8InitIoInternal(a, b) {
      if (b != bz) {
        alert2("mismatch error");
        return 0
      }
      if (a);
      return 1
    }
    function VP8New(a) {
      let b = newObjectIt(cg);
      if (b) {
        SetOk(b);
        b.ready_ = 0
      }
      return b
    }
    function VP8Delete(a) {
      if (a) {
        VP8Clear(a);
        a = 0
      }

    }
    function VP8SetError(a, b, c) {
      a.status_ = b;
      a.error_msg_ = c;
      a.ready_ = 0;
      alert2(b + ": " + c);
      return 0
    }
    function get_le32(a, b) {
      return a[b + 0] | a[b + 1] << 8 | a[b + 2] << 16 | a[b + 3] << 24
    }
    function VP8CheckAndSkipHeader(a, b, c, d, e, f) {
      if (!a || !c || !d || !e) return 0;
      if (c.value >= 8) if (!memcmp(a, b.value, "VP8 ", 4)) {
        d.value = 1;
        e.value = get_le32(a, b.value + 4);
        if (f.value >= cV && e.value > f.value - cV) return 0;
        b.value += 8;
        c.value -= 8
      }
      else {
        d.value = 0;
        e.value = 0
      }
      else {
        d.value = -1;
        e.value = 0
      }
      return 1
    }
    function VP8GetInfo(a, b, c, d, e, f, g) {
      if (c.value < 10) return 0;
      if (a[b.value + 3] != 157 || a[b.value + 4] != 1 || a[b.value + 5] != 42) return 0;
      else {
        let i = a[b.value + 0] | a[b.value + 1] << 8 | a[b.value + 2] << 16;
        let j = !(i & 1) + 0;
        let w = (a[b.value + 7] << 8 | a[b.value + 6]) & 16383;
        let h = (a[b.value + 9] << 8 | a[b.value + 8]) & 16383;
        if (g) {
          if (c.value < 11) return 0;
          g.value = !!(a[b.value + 10] & 128)
        }
        if (!j) return 0;
        if ((i >> 1 & 7) > 3) return 0;
        if (!(i >> 4 & 1)) return 0;
        if (i >> 5 >= d) return 0;
        if (e) e.value = w;
        if (f) f.value = h;
        return 1
      }

    }
    function VP8XGetInfo(a, b, c, d, e, f, g) {
      if (!a || !c || !d) return 0;
      if (c.value >= cW) if (!memcmp(a, b.value, "VP8X", 4)) {
        let h = get_le32(a, b.value + 4);
        d.value = 1;
        if (h.value != cW - 8) return 0;
        if (g) g.value = get_le32(a, b.value + 8);
        if (e) e.value = get_le32(a, b.value + 12);
        if (f) f.value = get_le32(a, b.value + 16);
        b.value += cW;
        c.value -= cW
      }
      else d.value = 0;
      else d.value = -1;
      return 1
    }
    function ResetSegmentHeader(a) {
      assert(a);
      a.use_segment_ = 0;
      a.update_map_ = 0;
      a.absolute_delta_ = 1;
      for (i = 0;
        i < a.quantizer_.length;
        ++i)a.quantizer_[i] = 0;
      for (i = 0;
        i < a.filter_strength_.length;
        ++i)a.filter_strength_[i] = 0
    }
    function ParseSegmentHeader(a, b, c) {
      assert(a);
      assert(b);
      b.use_segment_ = VP8Get(a);
      if (b.use_segment_) {
        b.update_map_ = VP8Get(a);
        if (VP8Get(a)) {
          var s;
          b.absolute_delta_ = VP8Get(a);
          for (s = 0;
            s < NUM_MB_SEGMENTS;
            ++s)b.quantizer_[s] = VP8Get(a) ? VP8GetSignedValue(a, 7) : 0;
          for (s = 0;
            s < NUM_MB_SEGMENTS;
            ++s)b.filter_strength_[s] = VP8Get(a) ? VP8GetSignedValue(a, 6) : 0
        }
        if (b.update_map_) {
          var s;
          for (s = 0;
            s < bQ;
            ++s)c.segments_[s] = VP8Get(a) ? VP8GetValue(a, 8) : 255
        }

      }
      else b.update_map_ = 0;
      return !a.eof_
    }
    function ParsePartitions(a, b, c, d) {
      let e = a.br_;
      let f = b;
      let g = c;
      let h = b; let buf_end_off = c + d;
      let i;
      var j = 0;
      let k = int_;
      let p = int_;
      a.num_parts_ = 1 << VP8GetValue(e, 2);
      k = a.num_parts_ - 1;
      i = b;
      var j = c + k * 3;
      if (buf_end_off < j) return "VP8_STATUS_NOT_ENOUGH_DATA";
      for (p = 0;
        p < k;
        ++p) {
        let l = f[g + 0] | f[g + 1] << 8 | f[g + 2] << 16;
        let m = i;
        let n = j + l;
        if (n > buf_end_off) m = h;
        VP8InitBitReader(a.parts_[Number(p)], i, j, n);
        i = m;
        j = n;
        g += 3
      }
      VP8InitBitReader(a.parts_[Number(k)], i, j, buf_end_off);
      return j < buf_end_off ? "VP8_STATUS_OK" : "VP8_STATUS_SUSPENDED"
    }
    function ParseFilterHeader(a, b) {
      let c = b.filter_hdr_;
      c.simple_ = VP8Get(a);
      c.level_ = VP8GetValue(a, 6);
      c.sharpness_ = VP8GetValue(a, 3);
      c.use_lf_delta_ = VP8Get(a);
      if (c.use_lf_delta_) if (VP8Get(a)) {
        let i;
        for (i = 0;
          i < NUM_REF_LF_DELTAS;
          ++i)if (VP8Get(a)) c.ref_lf_delta_[i] = VP8GetSignedValue(a, 6);
        for (i = 0;
          i < NUM_MODE_LF_DELTAS;
          ++i)if (VP8Get(a)) c.mode_lf_delta_[i] = VP8GetSignedValue(a, 6)
      }
      b.filter_type_ = c.level_ == 0 ? 0 : c.simple_ ? 1 : 2;
      if (b.filter_type_ > 0) if (b.segment_hdr_.use_segment_) {
        let s;
        for (s = 0;
          s < NUM_MB_SEGMENTS;
          ++s) {
          let d = b.segment_hdr_.filter_strength_[s];
          if (!b.segment_hdr_.absolute_delta_) d += c.level_;
          b.filter_levels_[s] = d
        }

      }
      else b.filter_levels_[0] = c.level_;
      return !a.eof_
    }
    function VP8GetHeaders(a, b) {
      let c = {
        value: 0
      };
      let d = uint8_t;
      let e = {
        value: uint32_t
      };
      let f = {
        value: uint32_t
      };
      let g = {
        value: uint32_t
      };
      let h = {
        value: 0
      };
      let i = {
        value: 0
      };
      let j = newObjectIt(bX);
      let k = newObjectIt(bY);
      var l = newObjectIt(bJ);
      let m = "VP8StatusCode";
      if (a == null) {
        alert2("(dec == null)");
        return 0
      }
      SetOk(a);
      if (b == null) return VP8SetError(a, "VP8_STATUS_INVALID_PARAM", "null VP8Io passed to VP8GetHeaders()");
      d = b.data;
      c.value = b.data_off;
      e.value = b.data_size;
      if (d == null || e.value <= 4) return VP8SetError(a, "VP8_STATUS_NOT_ENOUGH_DATA", "Not enough data to parse frame header");
      if (!WebPCheckAndSkipRIFFHeader(d, c, e, f)) return VP8SetError(a, VP8_STATUS_BITSTREAM_ERROR, "RIFF: Invalid RIFF container");
      if (!VP8XGetInfo(d, c, e, h, null, null, null)) return VP8SetError(a, VP8_STATUS_BITSTREAM_ERROR, "RIFF: Invalid VP8X container");
      if (!VP8CheckAndSkipHeader(d, c, e, i, g, f)) return VP8SetError(a, VP8_STATUS_BITSTREAM_ERROR, "RIFF: Inconsistent size information.");
      if (i.value == -1) return VP8SetError(a, "VP8_STATUS_BITSTREAM_ERROR", "RIFF: Inconsistent size information.");
      if (e.value < 4) return VP8SetError(a, VP8_STATUS_NOT_ENOUGH_DATA, "RIFF: Truncated header.");
      c = c.value;
      e = e.value;
      let n = d[c + 0] | d[c + 1] << 8 | d[c + 2] << 16;
      j = a.frm_hdr_;
      j.key_frame_ = !(n & 1) + 0;
      j.profile_ = n >> 1 & 7;
      j.show_ = n >> 4 & 1;
      j.partition_length_ = n >> 5;
      if (j.profile_ > 3) return VP8SetError(a, "VP8_STATUS_BITSTREAM_ERROR", "Incorrect keyframe parameters.");
      if (!j.show_) return VP8SetError(a, "VP8_STATUS_UNSUPPORTED_FEATURE", "Frame not displayable.");
      c += 3;
      e -= 3;
      k = a.pic_hdr_;
      if (j.key_frame_) {
        if (e < 7) return VP8SetError(a, "VP8_STATUS_NOT_ENOUGH_DATA", "cannot parse picture header");
        if (Byte2Hex(d[c + 0]) != 157 || Byte2Hex(d[c + 1]) != 1 || Byte2Hex(d[c + 2]) != 42) return VP8SetError(a, "VP8_STATUS_BITSTREAM_ERROR", "Bad code word");
        k.width_ = (d[c + 4] << 8 | d[c + 3]) & 16383;
        k.xscale_ = d[c + 4] >> 6;
        k.height_ = (d[c + 6] << 8 | d[c + 5]) & 16383;
        k.yscale_ = d[c + 6] >> 6;
        c += 7;
        e -= 7;
        a.mb_w_ = k.width_ + 15 >> 4;
        a.mb_h_ = k.height_ + 15 >> 4;
        b.width = k.width_;
        b.height = k.height_;
        b.use_scaling = 0;
        b.use_cropping = 0;
        b.crop_top = 0;
        b.crop_left = 0;
        b.crop_right = b.width;
        b.crop_bottom = b.height;
        b.mb_w = b.width;
        b.mb_h = b.height;
        VP8ResetProba(a.proba_);
        ResetSegmentHeader(a.segment_hdr_);
        a.segment_ = 0
      }
      if (j.partition_length_ > e) return VP8SetError(a, "VP8_STATUS_NOT_ENOUGH_DATA", "bad partition length");
      a.alpha_data_ = null;
      a.alpha_data_size_ = 0;
      var l = a.br_;
      VP8InitBitReader(l, d, c, c + j.partition_length_);
      c += j.partition_length_;
      e -= j.partition_length_;
      if (j.key_frame_) {
        k.colorspace_ = VP8Get(l);
        k.clamp_type_ = VP8Get(l)
      }
      if (!ParseSegmentHeader(l, a.segment_hdr_, a.proba_)) return VP8SetError(a, "VP8_STATUS_BITSTREAM_ERROR", "cannot parse segment header");
      if (!ParseFilterHeader(l, a)) return VP8SetError(a, "VP8_STATUS_BITSTREAM_ERROR", "cannot parse filter header");
      m = ParsePartitions(a, d, c, e);
      if (m != "VP8_STATUS_OK") return VP8SetError(a, "VP8_STATUS_BITSTREAM_ERROR", "cannot parse partitions");
      VP8ParseQuant(a);
      if (!j.key_frame_) return VP8SetError(a, VP8_STATUS_UNSUPPORTED_FEATURE, "Not a key frame.");
      else a.buffer_flags_ = 3 | 256;
      VP8Get(l);
      VP8ParseProba(l, a);
      if (a.pic_hdr_.colorspace_) {
        let o = 8;
        let p = 1;
        let q = d;
        let r = c - o;
        let s = size_t;
        if (j.partition_length_ < o || q[r + o - 1] != p);
        s = q[r + 4] << 0 | q[r + 5] << 8 | q[r + 6] << 16;
        if (j.partition_length_ < s + o) return VP8SetError(a, VP8_STATUS_BITSTREAM_ERROR, "RIFF: Inconsistent extra information.");
        a.alpha_data_ = s > 0 ? q : null;
        a.alpha_data_off = s > 0 ? r - s : null;
        a.alpha_data_size_ = s;
        s = q[r + 0] << 0 | q[r + 1] << 8 | q[r + 2] << 16;
        a.layer_data_size_ = s;
        a.layer_data_ = null;
        a.layer_colorspace_ = q[r + 3]
      }
      a.ready_ = 1;
      return 1
    }
    let cY = new Array(0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0);
    let cZ = new Array(173, 148, 140, 0);
    let da = new Array(176, 155, 140, 135, 0);
    let db = new Array(180, 157, 141, 134, 130, 0);
    let dc = new Array(254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0);
    let dd = new Array(cZ, da, db, dc);
    let de = new Array(0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15);
    let df = ArrM(new Array(NUM_CTX, NUM_PROBAS), "");
    function GetCoeffs(a, b, c, d, n, e) {
      let p = b[cY[n]][c];
      if (!VP8GetBit(a, p[0])) return 0;
      while (1) {
        ++n;
        if (!VP8GetBit(a, p[1])) p = b[cY[n]][0];
        else {
          var v; var j;
          if (!VP8GetBit(a, p[2])) {
            p = b[cY[n]][1];
            v = 1
          }
          else {
            if (!VP8GetBit(a, p[3])) if (!VP8GetBit(a, p[4])) v = 2;
            else v = 3 + VP8GetBit(a, p[5]);
            else if (!VP8GetBit(a, p[6])) if (!VP8GetBit(a, p[7])) v = 5 + VP8GetBit(a, 159);
            else {
              v = 7 + 2 * VP8GetBit(a, 165);
              v += VP8GetBit(a, 145)
            }
            else {
              let f = uint8_t;
              let g = VP8GetBit(a, p[8]);
              let h = VP8GetBit(a, p[9 + g]);
              let k = 2 * g + h;
              v = 0;
              f = dd[k];
              var l;
              for (i = 0;
                i < f.length - 1;
                ++i)v += v + VP8GetBit(a, f[i]);
              v += 3 + (8 << k)
            }
            p = b[cY[n]][2]
          }
          j = de[n - 1];
          e[e[e.length - 1] + j] = VP8GetSigned(a, v) * d[(j > 0) + 0];
          if (n == 16 || !VP8GetBit(a, p[0])) return n
        }
        if (n == 16) return 16
      }

    }
    let dg = {
      i8: Arr(4, uint8_t), i32: uint32_t
    };
    let dh = new Array(new Array(0, 0, 0, 0), new Array(1, 0, 0, 0), new Array(0, 1, 0, 0), new Array(1, 1, 0, 0), new Array(0, 0, 1, 0), new Array(1, 0, 1, 0), new Array(0, 1, 1, 0), new Array(1, 1, 1, 0), new Array(0, 0, 0, 1), new Array(1, 0, 0, 1), new Array(0, 1, 0, 1), new Array(1, 1, 0, 1), new Array(0, 0, 1, 1), new Array(1, 0, 1, 1), new Array(0, 1, 1, 1), new Array(1, 1, 1, 1));
    let di = 134480385;
    function PACK(X, S) {
      return ((X[0] * 16777216 + X[1] * 65536 + X[2] * 256 + Number(X[3])) * di & 4278190080) >> S
    }
    function ParseResiduals(a, b, c) {
      let d; let out_l_nz; let first;
      let e = df;
      let q = a.dqm_[a.segment_];
      let f = a.coeffs_;
      let g = a.mb_info_[1 - 1];
      let h = Arr(4, 0); let nz_dc = Arr(4, 0);
      let i = Arr(4, 0); let lnz = Arr(4, 0);
      let j = 0;
      let k = 0;
      let x; let y; let ch;
      f = memset(0, 384 * sizeof(f));
      if (!a.is_i4x4_) {
        let m = Arr(16, 0);
        var n = b.dc_nz_ + g.dc_nz_;
        b.dc_nz_ = g.dc_nz_ = (GetCoeffs(c, a.proba_.coeffs_[1], n, q.y2_mat_, 0, m) > 0) + 0;
        first = 1;
        e = a.proba_.coeffs_[0];
        VP8TransformWHT(m, f);
        f[f.length - 1] = 0
      }
      else {
        first = 0;
        e = a.proba_.coeffs_[3]
      }
      i = ArrCopy(dh[b.nz_ & 15]);
      lnz = ArrCopy(dh[g.nz_ & 15]);
      for (y = 0;
        y < 4;
        ++y) {
        var l = lnz[y];
        for (x = 0;
          x < 4;
          ++x) {
          var n = l + i[x];
          var o = GetCoeffs(c, e, n, q.y1_mat_, first, f);
          i[x] = l = (o > 0) + 0;
          nz_dc[x] = (f[f[f.length - 1] + 0] != 0) + 0;
          h[x] = (o > 1) + 0;
          f[f.length - 1] += 16
        }
        lnz[y] = l;
        k |= PACK(nz_dc, 24 - y * 4);
        j |= PACK(h, 24 - y * 4)
      }
      d = PACK(i, 24);
      out_l_nz = PACK(lnz, 24);
      i = ArrCopy(dh[b.nz_ >> 4]);
      lnz = ArrCopy(dh[g.nz_ >> 4]);
      for (ch = 0;
        ch < 4;
        ch += 2) {
        for (y = 0;
          y < 2;
          ++y) {
          var l = lnz[ch + y];
          for (x = 0;
            x < 2;
            ++x) {
            var n = l + i[ch + x];
            var o = GetCoeffs(c, a.proba_.coeffs_[2], n, q.uv_mat_, 0, f);
            i[ch + x] = l = (o > 0) + 0;
            nz_dc[y * 2 + x] = (f[f[f.length - 1] + 0] != 0) + 0;
            h[y * 2 + x] = (o > 1) + 0;
            f[f.length - 1] += 16
          }
          lnz[ch + y] = l
        }
        k |= PACK(nz_dc, 8 - ch * 2);
        j |= PACK(h, 8 - ch * 2)
      }
      d |= PACK(i, 20);
      out_l_nz |= PACK(lnz, 20);
      b.nz_ = d;
      g.nz_ = out_l_nz;
      a.coeffs_ = f;
      a.non_zero_ac_ = j + 0;
      a.non_zero_ = j | k;
      b.skip_ = !a.non_zero_ + 0
    }
    let dj;
    function VP8DecodeMB(a, b) {
      let c = a.br_;
      let d = a.mb_info_[1 - 1];
      let e = a.mb_info_[1 + a.mb_x_];
      if (a.segment_hdr_.update_map_) a.segment_ = !VP8GetBit(c, a.proba_.segments_[0]) ? 0 + VP8GetBit(c, a.proba_.segments_[1]) : 2 + VP8GetBit(c, a.proba_.segments_[2]);
      e.skip_ = a.use_skip_proba_ ? VP8GetBit(c, a.skip_p_) : 0;
      VP8ParseIntraMode(c, a);
      if (c.eof_) return 0;
      if (!e.skip_) ParseResiduals(a, e, b);
      else {
        d.nz_ = e.nz_ = 0;
        if (!a.is_i4x4_) d.dc_nz_ = e.dc_nz_ = 0;
        a.non_zero_ = 0;
        a.non_zero_ac_ = 0
      }
      return !b.eof_
    }
    function VP8InitScanline(a) {
      let b = a.mb_info_[1 - 1];
      b.nz_ = 0;
      b.dc_nz_ = 0;
      memset_(a.intra_l_, 0, bP, a.intra_l_.length);
      a.filter_row_ = (a.filter_type_ > 0 && a.mb_y_ >= a.tl_mb_y_ && a.mb_y_ <= a.br_mb_y_) + 0
    }
    function ParseFrame(a, b) {
      for (a.mb_y_ = 0;
        a.mb_y_ < a.br_mb_y_;
        ++a.mb_y_) {
        let c = a.parts_[a.mb_y_ & a.num_parts_ - 1];
        VP8InitScanline(a);
        for (a.mb_x_ = 0;
          a.mb_x_ < a.mb_w_;
          a.mb_x_++) {
          if (!VP8DecodeMB(a, c)) return VP8SetError(a, "VP8_STATUS_NOT_ENOUGH_DATA", "Premature end-of-file encountered." + a.mb_x_ + " " + a.mb_y_);
          VP8ReconstructBlock(a);
          VP8StoreBlock(a)
        }
        if (!VP8ProcessRow(a, b)) return VP8SetError(a, "VP8_STATUS_USER_ABORT", "Output aborted.")
      }
      if (a.layer_data_size_ > 0) if (!VP8DecodeLayer(a)) return 0;
      return 1
    }
    function VP8Decode(a, b) {
      let c = 0;
      if (a == null) return 0;
      if (b == null) return VP8SetError(a, "VP8_STATUS_INVALID_PARAM", "NULL VP8Io parameter in VP8Decode().");
      if (!a.ready_) if (!VP8GetHeaders(a, b)) return 0;
      assert(a.ready_);
      c = VP8EnterCritical(a, b) == bE;
      if (c) {
        if (c) c = VP8InitFrame(a, b);
        if (c) c = ParseFrame(a, b);
        c &= VP8ExitCritical(a, b)
      }
      if (!c) {
        VP8Clear(a);
        return 0
      }
      a.ready_ = 0;
      return 1
    }
    function VP8Clear(a) {
      if (a == null) return;
      if (a.use_threads_);
      if (a.mem_) a.mem_ = 0;
      a.mem_ = null;
      a.mem_size_ = 0;
      a.ready_ = 0
    }
    let dk = 16; let YUV_RANGE_MIN = -227; let YUV_RANGE_MAX = 256 + 226;
    function VP8YuvToRgb(y, u, v, a, b) {
      let c = dm[v];
      let d = dn[v] + VP8kUToG[u] >> dk;
      let e = VP8kUToB[u];
      a[b + 0] = dp[y + c - YUV_RANGE_MIN];
      a[b + 1] = dp[y + d - YUV_RANGE_MIN];
      a[b + 2] = dp[y + e - YUV_RANGE_MIN]
    }
    function VP8YuvToArgbKeepA(y, u, v, a, b) {
      VP8YuvToRgb(y, u, v, a, b + 1)
    }
    function VP8YuvToArgb(y, u, v, a, b) {
      a[b + 0] = 255;
      VP8YuvToArgbKeepA(y, u, v, a, b)
    }
    let dl = 1 << dk - 1;
    var dm = Arr(256, int16_t); var VP8kUToB = Arr(256, int16_t);
    var dn = Arr(256, int32_t); var VP8kUToG = Arr(256, int32_t);
    var dp = Arr(YUV_RANGE_MAX - YUV_RANGE_MIN, uint8_t);
    let dq = Arr(YUV_RANGE_MAX - YUV_RANGE_MIN, uint8_t);
    let dr = 0;
    function clip(v, a) {
      return v < 0 ? 0 : v > a ? a : v
    }
    function VP8YUVInit(a) {
      let i;
      if (dr) return;
      for (i = 0;
        i < 256;
        ++i) {
        dm[i] = 89858 * (i - 128) + dl >> dk;
        VP8kUToG[i] = -22014 * (i - 128) + dl;
        dn[i] = -45773 * (i - 128);
        VP8kUToB[i] = 113618 * (i - 128) + dl >> dk
      }
      for (i = YUV_RANGE_MIN;
        i < YUV_RANGE_MAX;
        ++i) {
        let k = (i - 16) * 76283 + dl >> dk;
        dp[i - YUV_RANGE_MIN] = clip(k, 255);
        dq[i - YUV_RANGE_MIN] = clip(k + 8 >> 4, 15)
      }
      dr = 1
    }
    function LOAD_UV(u, v) {
      return u | v << 16
    }
    function FUNC_NAME(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
      let x;
      let t = q - 1 >> 1;
      let u = LOAD_UV(e[f + 0], g[h + 0]);
      let v = LOAD_UV(i[j + 0], k[l + 0]);
      if (a) {
        var w = 3 * u + v + 131074 >> 2;
        r(a[b + 0], w & 255, w >> 16, m, n)
      }
      if (c) {
        var w = 3 * v + u + 131074 >> 2;
        r(c[d + 0], w & 255, w >> 16, o, p)
      }
      for (x = 1;
        x <= t;
        ++x) {
        let y = LOAD_UV(e[f + x], g[h + x]);
        let z = LOAD_UV(i[j + x], k[l + x]);
        let A = u + y + v + z + 524296;
        let B = A + 2 * (y + v) >> 3;
        let C = A + 2 * (u + z) >> 3;
        if (a) {
          var w = B + u >> 1;
          var D = C + y >> 1;
          r(a[b + 2 * x - 1], w & 255, w >> 16, m, n + (2 * x - 1) * s);
          r(a[b + 2 * x - 0], D & 255, D >> 16, m, n + (2 * x - 0) * s)
        }
        if (c) {
          var w = C + v >> 1;
          var D = B + z >> 1;
          r(c[d + 2 * x - 1], w & 255, w >> 16, o, p + (2 * x - 1) * s);
          r(c[d + 2 * x + 0], D & 255, D >> 16, o, p + (2 * x + 0) * s)
        }
        u = y;
        v = z
      }
      if (!(q & 1)) {
        if (a) {
          var w = 3 * u + v + 131074 >> 2;
          r(a[b + q - 1], w & 255, w >> 16, m, n + (q - 1) * s)
        }
        if (c) {
          var w = 3 * v + u + 131074 >> 2;
          r(c[d + q - 1], w & 255, w >> 16, o, p + (q - 1) * s)
        }

      }

    }
    function UpsampleArgbLinePair(A, a, B, b, C, c, D, d, E, e, F, f, G, g, H, h, l) {
      FUNC_NAME(A, a, B, b, C, c, D, d, E, e, F, f, G, g, H, h, l, VP8YuvToArgb, 4)
    }
    function UpsampleArgbKeepAlphaLinePair(A, a, B, b, C, c, D, d, E, e, F, f, G, g, H, h, l) {
      FUNC_NAME(A, a, B, b, C, c, D, d, E, e, F, f, G, g, H, h, l, VP8YuvToArgbKeepA, 4)
    }
    let ds = new Array(MODE_LAST);
    let dt = new Array(MODE_LAST);
    function InitUpsamplers(a) {
      ds[MODE_ARGB] = UpsampleArgbLinePair;
      dt[MODE_ARGB] = UpsampleArgbKeepAlphaLinePair
    }
    function FUNC_NAME_SAMPLE(a, b, c, d, u, e, v, f, g, h, j, k, l, m, n) {
      let i;
      for (i = 0;
        i < l - 1;
        i += 2) {
        m(a[b + 0], u[e + 0], v[f + 0], g, h);
        m(a[b + 1], u[e + 0], v[f + 0], g, h + n);
        m(c[d + 0], u[e + 0], v[f + 0], j, k);
        m(c[d + 1], u[e + 0], v[f + 0], j, k + n);
        b += 2;
        d += 2;
        e++;
        f++;
        h += 2 * n;
        k += 2 * n
      }
      if (i == l - 1) {
        m(a[b + 0], u[e + 0], v[f + 0], g, h);
        m(c[d + 0], u[e + 0], v[f + 0], j, k)
      }

    }
    function SampleArgbLinePair(A, a, B, b, C, c, D, d, E, e, F, f, l) {
      FUNC_NAME_SAMPLE(A, a, B, b, C, c, D, d, E, e, F, f, l, VP8YuvToArgb, 4)
    }
    let du = new Array(0, 0, 0, 0, SampleArgbLinePair, 0, 0);
    let dv = 0;
    function EmitSampledRGB(a, p) {
      let b = p.output;
      let c = b.u.RGBA;
      let d = c.rgba;
      let e = c.rgba_off + a.mb_y * c.stride;
      let f = a.y;
      let g = a.y_off;
      let h = a.u;
      let i = a.u_off;
      let k = a.v;
      let l = a.v_off;
      let m = du[b.colorspace];
      let n = a.mb_w;
      let o = a.mb_h - 1;
      let j;
      for (j = 0;
        j < o;
        j += 2) {
        m(f, g, f, g + a.y_stride, h, i, k, l, d, e, d, e + c.stride, n);
        g += 2 * a.y_stride;
        i += a.uv_stride;
        l += a.uv_stride;
        e += 2 * c.stride
      }
      if (j == o) m(f, g, f, g, h, i, k, l, d, e, d, e, n);
      return a.mb_h
    }
    function EmitFancyRGB(a, p) {
      let b = a.mb_h;
      let c = p.output.u.RGBA;
      let d = c.rgba;
      let e = c.rgba_off + a.mb_y * c.stride;
      let f = a.a ? dt[p.output.colorspace] : ds[p.output.colorspace];
      let g = a.y;
      let h = a.y_off;
      let i = a.u;
      let j = a.u_off;
      let k = a.v;
      let l = a.v_off;
      let m = p.tmp_u;
      let n = p.tmp_u_off;
      let o = p.tmp_v;
      let q = p.tmp_v_off;
      let y = a.mb_y;
      let r = a.mb_y + a.mb_h;
      let s = a.mb_w;
      let t = parseInt((s + 1) / 2);
      if (y == 0) f(null, null, g, h, i, j, k, l, i, j, k, l, null, null, d, e, s);
      else {
        f(p.tmp_y, p.tmp_y_off, g, h, m, n, o, q, i, j, k, l, d, e - c.stride, d, e, s);
        b++
      }
      for (;
        y + 2 < r;
        y += 2) {
        m = i;
        n = j;
        o = k;
        q = l;
        j += a.uv_stride;
        l += a.uv_stride;
        e += 2 * c.stride;
        h += 2 * a.y_stride;
        f(g, h - a.y_stride, g, h, m, n, o, q, i, j, k, l, d, e - c.stride, d, e, s)
      }
      h += a.y_stride;
      if (a.crop_top + r < a.crop_bottom) {
        memcpy(p.tmp_y, p.tmp_y_off, g, h, s * sizeof(p.tmp_y));
        memcpy(p.tmp_u, p.tmp_u_off, i, j, t * sizeof(p.tmp_u));
        memcpy(p.tmp_v, p.tmp_v_off, k, l, t * sizeof(p.tmp_v));
        b--
      }
      else if (!(r & 1)) f(g, h, null, null, i, j, k, l, i, j, k, l, d, e + c.stride, null, null, s);
      return b
    }
    function EmitAlphaRGB(a, p) {
      let b = p.output.colorspace;
      let c = b == MODE_ARGB ? 0 : b == MODE_RGBA_4444 ? 1 : 3;
      let d = b == MODE_RGBA_4444 ? 2 : 4;
      let e = a.mb_w;
      let f = a.mb_h;
      let i; let j;
      let g = p.output.u.RGBA;
      let h = g.rgba;
      let k = g.rgba_off + a.mb_y * g.stride;
      let l = a.a;
      let m = a.a_off;
      if (l != null) for (j = 0;
        j < f;
        ++j) {
        for (i = 0;
          i < e;
          ++i)h[k + d * i + c] = l[m + i];
        m += a.width;
        k += g.stride
      }
      return 0
    }
    let dw = 30;
    function MULT(x, y) {
      return x * y + (1 << dw - 1) >> dw
    }
    function IsAlphaMode(a) {
      return a == MODE_RGBA || a == MODE_BGRA || a == MODE_ARGB || a == MODE_RGBA_4444 || a == MODE_YUVA
    }
    function InitFromOptions(a, b) {
      let W = b.width;
      let H = b.height;
      let x = 0; let y = 0; let w = W; let h = H;
      b.use_cropping = a != null && a.use_cropping > 0;
      if (b.use_cropping) {
        w = a.crop_width;
        h = a.crop_height;
        x = a.crop_left & ~1;
        y = a.crop_top & ~1;
        if (x < 0 || y < 0 || w <= 0 || h <= 0 || x + w > W || y + h > H) return 0
      }
      b.crop_left = x;
      b.crop_top = y;
      b.crop_right = x + w;
      b.crop_bottom = y + h;
      b.mb_w = w;
      b.mb_h = h;
      b.use_scaling = (a != null && a.use_scaling > 0) + 0;
      b.bypass_filtering = a && a.bypass_filtering;
      b.fancy_upsampling = (a == null || !a.no_fancy_upsampling) + 0;
      return 1
    }
    function CustomSetup(a) {
      let p = a.opaque;
      let b = p.output.colorspace < MODE_YUV;
      p.memory = null;
      p.emit = null;
      p.emit_alpha = null;
      if (!InitFromOptions(p.options_, a)) return 0;
      if (a.use_scaling);
      else {
        if (b) {
          p.emit = EmitSampledRGB;
          if (a.fancy_upsampling) {
            let c = a.mb_w + 1 >> 1;
            p.memory = malloc(a.mb_w + 2 * c, 205);
            if (p.memory == null) {
              alert2("memory error #2");
              return 0
            }
            p.tmp_y = p.memory;
            p.tmp_y_off = 0;
            p.tmp_u = p.tmp_y;
            p.tmp_u_off = p.tmp_y_off + a.mb_w;
            p.tmp_v = p.tmp_u;
            p.tmp_v_off = p.tmp_u_off + c;
            p.emit = EmitFancyRGB;
            InitUpsamplers()
          }

        }
        else;
        if (IsAlphaMode(p.output.colorspace)) p.emit_alpha = b ? EmitAlphaRGB : 0
      }
      if (b) VP8YUVInit();
      return 1
    }
    function CustomPut(a) {
      let p = a.opaque;
      let b = a.mb_w;
      let c = a.mb_h;
      let d;
      assert(!(a.mb_y & 1));
      if (b <= 0 || c <= 0) return 0;
      d = p.emit(a, p);
      p.last_y += d;
      if (p.emit_alpha) p.emit_alpha(a, p);
      return 1
    }
    function CustomTeardown(a) {
      let p = a.opaque;
      p.memory = "";
      p.memory = null
    }
    function WebPInitCustomIo(a, b) {
      b.put = CustomPut;
      b.setup = CustomSetup;
      b.teardown = CustomTeardown;
      b.opaque = a
    }
    var cV = 12;
    function WebPCheckAndSkipRIFFHeader(a, b, c, d) {
      if (c.value >= cV && !memcmp(a, b.value, "RIFF", 4)) if (memcmp(a, b.value + 8, "WEBP", 4)) return 0;
      else {
        d.value = get_le32(a, b.value + 4);
        if (d.value < cV) return 0;
        b.value += cV;
        c.value -= cV
      }
      else d.value = 0;
      return 1
    }
    function WebPResetDecParams(a) {
      if (a) { }
    }
    function DecodeInto(a, b, c, d) {
      let e = new VP8New;
      let f = bE;
      let g = newObjectIt(bH);
      let h = 1;
      assert(d);
      if (e == null) return VP8_STATUS_INVALID_PARAM;
      VP8InitIo(g);
      g.data = a;
      g.data_off = b;
      g.data_size = c;
      WebPInitCustomIo(d, g);
      e.use_threads_ = 0;
      if (!VP8GetHeaders(e, g)) f = VP8_STATUS_BITSTREAM_ERROR;
      else {
        f = WebPAllocateDecBuffer(g.width, g.height, d.options_, d.output);
        if (f == bE) if (!VP8Decode(e, g)) f = e.status_
      }
      VP8Delete(e);
      if (f != bE) this.WebPFreeDecBuffer(d.output);
      return f
    }
    function DecodeIntoRGBABuffer(a, b, c, d, e, f) {
      let g = newObjectIt(bI);
      let h = newObjectIt(bD);
      if (d == null) return null;
      WebPInitDecBuffer(h);
      WebPResetDecParams(g);
      g.output = h;
      h.colorspace = a;
      h.u.RGBA.rgba = d;
      h.u.RGBA.rgba_off = 0;
      h.u.RGBA.stride = e;
      h.u.RGBA.size = f;
      h.is_external_memory = 1;
      if (DecodeInto(b, 0, c, g) != bE) return null;
      return d
    }
    function WebPDecodeARGBInto(a, b, c, d, e) {
      return DecodeIntoRGBABuffer(MODE_ARGB, a, b, c, e, d)
    }
    function Decode(a, b, c, d, e, f) {
      let g = {
        value: 0
      };
      var c = {
        value: c
      };
      let h = newObjectIt(bI);
      let i = newObjectIt(bD);
      WebPInitDecBuffer(i);
      WebPResetDecParams(h);
      h.output = i;
      i.colorspace = a;
      let o = {
        data_off: {
          value: 0
        }
        , width: {
          value: i.width
        }
        , height: {
          value: i.height
        }

      };
      if (!WebPGetInfo(b, g, c, o.width, o.height)) return null;
      i.width = o.width.value;
      i.height = o.height.value;
      if (d) d.value = i.width.value;
      if (e) e.value = i.height.value;
      if (DecodeInto(b, g.value, c.value, h) != bE) return null;
      if (f) WebPCopyDecBuffer(i, f);
      return a >= MODE_YUV ? i.u.YUVA.y : i.u.RGBA.rgba
    }
    this.WebPDecodeARGB = function (a, b, c, d) {
      return Decode(MODE_ARGB, a, b, c, d, null)
    };
    function DefaultFeatures(a) {
      assert(a);
      a.bitstream_version = 0
    }
    function GetFeatures(a, b, c, d) {
      let e = {
        value: 0
      };
      let f = {
        value: 0
      };
      let g = {
        value: 0
      };
      let h = {
        value: 0
      };
      let i = {
        value: 0
      };
      if (d == null) return VP8_STATUS_INVALID_PARAM;
      DefaultFeatures(d);
      if (a == null || b == null || c.value == 0) return VP8_STATUS_INVALID_PARAM;
      if (!WebPCheckAndSkipRIFFHeader(a, b, c, f)) return VP8_STATUS_BITSTREAM_ERROR;
      if (!VP8XGetInfo(a, b, c, h, d.width, d.height, g)) return VP8_STATUS_BITSTREAM_ERROR;
      if (h.value > 0) return bE;
      if (!VP8CheckAndSkipHeader(a, b, c, i, e, f)) return VP8_STATUS_BITSTREAM_ERROR;
      if (i.value == -1) return VP8_STATUS_BITSTREAM_ERROR;
      if (!i.value) e.value = c.value;
      if (!VP8GetInfo(a, b, c, e, d.width, d.height, d.has_alpha)) return VP8_STATUS_BITSTREAM_ERROR;
      return bE
    }
    function WebPGetInfo(a, b, c, d, e) {
      let f = newObjectIt(bF);
      if (GetFeatures(a, b, c, f) != bE) return 0;
      if (d) d.value = f.width;
      if (e) e.value = f.height;
      return 1
    }
    function WebPInitDecoderConfigInternal(a, b) {
      if (b != bz) return 0;
      if (a == null) return 0;
      DefaultFeatures(a.input);
      WebPInitDecBuffer(a.output);
      return 1
    }
    function WebPGetFeaturesInternal(a, b, c, d) {
      if (d != bz) return VP8_STATUS_INVALID_PARAM;
      if (c == null) return VP8_STATUS_INVALID_PARAM;
      let e = {
        value: 0
      };
      var b = {
        value: b
      };
      return GetFeatures(a, e, b, c)
    }
    this.WebPDecode = function (a, b, c) {
      let d = newObjectIt(bI);
      let e = "VP8StatusCode";
      if (!c) return VP8_STATUS_INVALID_PARAM;
      let f = {
        value: 0
      };
      b = {
        value: b
      };
      e = GetFeatures(a, f, b, c.input);
      if (e != bE) return e;
      WebPResetDecParams(d);
      d.output = c.output;
      d.options_ = c.options;
      e = DecodeInto(a, f.value, b.value, d);
      return e
    }

  }
  if (!window.getComputedStyle) window.getComputedStyle = function (c, d) {
    this.el = c;
    this.getPropertyValue = function (a) {
      let b = /(\-([a-z]){1})/g;
      if (a == "float") a = "styleFloat";
      if (b.test(a)) a = a.replace(b, function () {
        return arguments[2].toUpperCase()
      });
      return c.currentStyle[a] ? c.currentStyle[a] : null
    };
    return this
  };
  let IEBinaryToArray_ByteStr_Script = "<\!-- IEBinaryToArray_ByteStr --\>\r\n" + "Function IEBinaryToArray_ByteStr(Binary)\r\n" + "\tIEBinaryToArray_ByteStr = CStr(Binary)\r\n" + "End Function\r\n" + "Function IEBinaryToArray_ByteStr_Last(Binary)\r\n" + "\tDim lastIndex\r\n" + "\tlastIndex = LenB(Binary)\r\n" + "\tif lastIndex mod 2 Then\r\n" + "\t\tIEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n" + "\tElse\r\n" + "\t\tIEBinaryToArray_ByteStr_Last = " + '""' + "\r\n" + "\tEnd If\r\n" + "End Function\r\n";
  function vbscript_IEBinaryToArray_ByteStr() {
    let a = document.createElement("script");
    a.type = "text/vbscript";
    let s = document.getElementsByTagName("script")[0];
    a.innerHTML = IEBinaryToArray_ByteStr_Script;
    s.parentNode.insertBefore(a, s)
  }
  function convertResponseBodyToText(b) {
    let c = {};
    for (let i = 0;
      i < 256;
      i++)for (let j = 0;
        j < 256;
        j++)c[String.fromCharCode(i + j * 256)] = String.fromCharCode(i) + String.fromCharCode(j);
    try {
      let d = IEBinaryToArray_ByteStr(b);
      let f = IEBinaryToArray_ByteStr_Last(b);
      return d.replace(/[\s\S]/g, function (a) {
        return c[a]
      }) + f
    }
    catch (e) {
      return null
    }

  }
  function WebPJSInit() {
    let D = "webpjs-0.0.2.min.js";
    let E = "webpjs-0.0.2.swf";
    let F = "";
    let G = document.getElementsByTagName("script");
    let H = G.length;
    for (let i = 0;
      i < H;
      ++i)if (G[i].src.indexOf(D) >= 0) {
        F = G[i].src.substr(0, G[i].src.lastIndexOf("/") + 1);
        break
      }
    let I = F + E;
    function checkWebPSupport() {
      let a = new Image;
      a.onload = function () {
        if (a.width == 2 && a.height == 2) startDecoding();
        else startDecoding()
      };
      a.onerror = function () {
        startDecoding()
      };
      let b = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      a.src = b;
      a.setAttribute("src", b)
    }
    checkWebPSupport();
    let J = false;
    function startDecoding() {
      if (J) return;
      J = true;
      function IsWebPFile(a) {
        if (a.substr(a.length - 5, a.length) == ".webp") return 1;
        else return 0
      }
      let p = document.createElement("img");
      function makeCacheValidUrl(a, b) {
        if (b.indexOf("http://") != 0) b = String(a) + b;
        p.src = b;
        b = p.src;
        return b
      }
      function checkAndAddToWaitList(a, b, c, d) {
        if (IsWebPFile(b)) addFilenameToWaitList(a, b, c, d)
      }
      let q = [];
      function addFilenameToWaitList(a, b, c, d) {
        b = makeCacheValidUrl(a, b);
        q.push(new Array(b, c, d ? d : 0))
      }
      function removeQuotes(a) {
        let c = (a.substr(a.indexOf("url") + 4).substr(0, 1) == '"' || a.substr(a.indexOf("url") + 4).substr(0, 1) == "'") + 0;
        let b = a.substr(a.indexOf("url") + 4 + c, a.lastIndexOf(")") - c - (a.indexOf("url") + 4 + c));
        return b
      }
      // let r = document.body.getElementsByTagName("*");
      // for (let i = 0;
      //   i < document.images.length;
      //   i++)checkAndAddToWaitList("", document.images[i].src, document.images[i], 1);
      // for (let s = 0;
      //   s < r.length;
      //   s++) {
      //   let t = r[s];
      //   let u = window.getComputedStyle(t, null).getPropertyValue("background-image");
      //   if (u.match("url")) {
      //     let v = removeQuotes(u);
      //     checkAndAddToWaitList("", v, t)
      //   }

      // }
      let x = 0;
      if (typeof JSON !== "undefined" && !!document.createElement("canvas").getContext) {
        var z = typeof XMLHttpRequest !== "undefined" ? new XMLHttpRequest : window.ActiveXObject ? new ActiveXObject("MSXML2.XMLHTTP") : null;
        let A = new WebPDecoder
      }
      (function () {
        let d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        function base64encode(a) {
          let b; let i; let len;
          let c; let c2; let c3;
          len = a.length;
          i = 0;
          b = "";
          while (i < len) {
            c = a.charCodeAt(i++) & 255;
            if (i == len) {
              b += d.charAt(c >> 2);
              b += d.charAt((c & 3) << 4);
              b += "==";
              break
            }
            c2 = a.charCodeAt(i++);
            if (i == len) {
              b += d.charAt(c >> 2);
              b += d.charAt((c & 3) << 4 | (c2 & 240) >> 4);
              b += d.charAt((c2 & 15) << 2);
              b += "=";
              break
            }
            c3 = a.charCodeAt(i++);
            b += d.charAt(c >> 2);
            b += d.charAt((c & 3) << 4 | (c2 & 240) >> 4);
            b += d.charAt((c2 & 15) << 2 | (c3 & 192) >> 6);
            b += d.charAt(c3 & 63)
          }
          return b
        }
        if (!window.btoa) window.btoa = base64encode
      })();
      Number.prototype.toUInt = function () {
        return this < 0 ? this + 4294967296 : this
      };
      Number.prototype.bytes32 = function () {
        return [this >>> 24 & 255, this >>> 16 & 255, this >>> 8 & 255, this & 255]
      };
      Number.prototype.bytes16sw = function () {
        return [this & 255, this >>> 8 & 255]
      };
      Array.prototype.adler32 = function (c, d) {
        switch (arguments.length) {
          case 0: c = 0;
          case 1: d = this.length - c
        }
        let a = 1; let b = 0;
        for (let i = 0;
          i < d;
          i++) {
          a = (a + this[c + i]) % 65521;
          b = (b + a) % 65521
        }
        return (b << 16 | a).toUInt()
      };
      Array.prototype.crc32 = function (a, b) {
        switch (arguments.length) {
          case 0: a = 0;
          case 1: b = this.length - a
        }
        let d = arguments.callee.crctable;
        if (!d) {
          d = [];
          var c;
          for (let n = 0;
            n < 256;
            n++) {
            c = n;
            for (let k = 0;
              k < 8;
              k++)c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
            d[n] = c.toUInt()
          }
          arguments.callee.crctable = d
        }
        var c = 4294967295;
        for (let i = 0;
          i < b;
          i++)c = d[(c ^ this[a + i]) & 255] ^ c >>> 8;
        return (c ^ 4294967295).toUInt()
      };
      (function () {
        let l = function () {
          let a = Array.prototype.slice.call(this.getContext("2d").getImageData(0, 0, this.width, this.height).data);
          let w = this.width;
          let h = this.height;
          let b = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82];
          Array.prototype.push.apply(b, w.bytes32());
          Array.prototype.push.apply(b, h.bytes32());
          b.push(8, 6, 0, 0, 0);
          Array.prototype.push.apply(b, b.crc32(12, 17).bytes32());
          let d = h * (w * 4 + 1);
          for (let y = 0;
            y < h;
            y++)a.splice(y * (w * 4 + 1), 0, 0);
          let e = Math.ceil(d / 32768);
          Array.prototype.push.apply(b, (d + 5 * e + 6).bytes32());
          let f = b.length;
          let g = d + 5 * e + 6 + 4;
          b.push(73, 68, 65, 84, 120, 1);
          for (let i = 0;
            i < e;
            i++) {
            let j = Math.min(32768, d - i * 32768);
            b.push(i == e - 1 ? 1 : 0);
            Array.prototype.push.apply(b, j.bytes16sw());
            Array.prototype.push.apply(b, (~j).bytes16sw());
            let k = a.slice(i * 32768, i * 32768 + j);
            Array.prototype.push.apply(b, k)
          }
          Array.prototype.push.apply(b, a.adler32().bytes32());
          Array.prototype.push.apply(b, b.crc32(f, g).bytes32());
          b.push(0, 0, 0, 0, 73, 69, 78, 68);
          Array.prototype.push.apply(b, b.crc32(b.length - 4, 4).bytes32());
          return "data:image/png;base64," + btoa(b.map(function (c) {
            return String.fromCharCode(c)
          }).join(""))
        };
        if (typeof HTMLCanvasElement !== "undefined") {
          let m = HTMLCanvasElement.prototype.toDataURL;
          HTMLCanvasElement.prototype.toDataURL = function (a) {
            let b = m.apply(this, arguments);
            if (b == "data:,") {
              HTMLCanvasElement.prototype.toDataURL = l;
              return this.toDataURL()
            }
            else {
              HTMLCanvasElement.prototype.toDataURL = m;
              return b
            }

          }

        }

      })();
      function bitmapToPNGFromCanvas(a, b) {
        if (a != null) {
          let c = b.height.value;
          let d = b.width.value;
          let e = document.createElement("canvas");
          e.id = "webbpywebpcanvas";
          e.innerHTML = "text";
          document.body.appendChild(e);
          let f = document.getElementById("webbpywebpcanvas");
          f.style.display = "none";
          f.height = c;
          f.width = d;
          let g = f.getContext("2d");
          let i = g.createImageData(f.width, f.height);
          let j = i.data;
          for (let h = 0;
            h < c;
            h++)for (let w = 0;
              w < d;
              w++) {
              j[2 + w * 4 + d * 4 * h] = a[3 + w * 4 + d * 4 * h];
              j[1 + w * 4 + d * 4 * h] = a[2 + w * 4 + d * 4 * h];
              j[0 + w * 4 + d * 4 * h] = a[1 + w * 4 + d * 4 * h];
              j[3 + w * 4 + d * 4 * h] = a[0 + w * 4 + d * 4 * h]
            }
          g.putImageData(i, 0, 0);
          var k = f.toDataURL("image/png");
          document.body.removeChild(document.getElementById("webbpywebpcanvas"))
        }
        else k = b.URL;
        return k
      }
      let B = [];
      function InsertIntoCacheList(a, b) {
        B.push(new Array(a, b))
      }
      function in_cacheList(a) {
        for (let i = 0;
          i < B.length;
          i++)if (a === B[i][0]) return WebPData = B[i][1];
        return false
      }
      function writeResultIntoElement(a, b) {
        if (a && a.type == "PNGDataBase64") {
          let c = q[x][1];
          if (q[x][2]) c.src = a.Data;
          else c.style.backgroundImage = "url(" + a.Data + ")"
        }
        else if (a == null && b == "as") {
          let d = q[x][1];
          let e = q[x][2];
          if (e == 0) {
            let f;
            if (typeof d.selectorText === "undefined") addEmbedObjectBG(d, x, a)
          }
          else if (e == 1) addEmbedObjectIMG(d, x, a)
        }

      }
      function waitListNext() {
        setTimeout(function () {
          x++;
          if (x < q.length) waitListProcess(x);
          if (x >= q.length) B = []
        }
          , 0)
      }
      function waitListProcess(b) {
        let c = q[b][0];
        if (document.createElement("canvas").getContext) if (WebPData = in_cacheList(c)) {
          writeResultIntoElement(WebPData);
          waitListNext()
        }
        else {
          z.open("get", c);
          if (z.overrideMimeType) z.overrideMimeType("text/plain; charset=x-user-defined");
          else z.setRequestHeader("Accept-Charset", "x-user-defined");
          if (z.responseType === undefined) {
            z.onload = function () {
              if (z.status == 200) try {
                if (typeof z.responseBody === "undefined") var a = z.responseText.split("").map(function (e) {
                  return e.charCodeAt(0) & 255
                });
                else {
                  vbscript_IEBinaryToArray_ByteStr();
                  var a = convertBinaryToArray(convertResponseBodyToText(z.responseBody))
                }
                window.DecodeWebPImage(c, a, "js")
              }
                catch (e) {
                  waitListNext()
                }
              else waitListNext()
            };
          }
          else {
            z.responseType = "arraybuffer";
            z.onload = function () {
              if (z.status == 200) try {
                window.DecodeWebPImage(c, new Uint8Array(z.response), "js")
              }
                catch (e) {
                  waitListNext()
                }
              else waitListNext()
            };
          }
          z.send()
        }
        else writeResultIntoElement(null, "as")
      }
      function getOuterHTML(o) {
        let e = document.createElement("div");
        e.appendChild(o.cloneNode(true));
        return e.innerHTML
      }
      function addEmbedObjectIMG(a, b, c) {
        let d = window.getComputedStyle(a, null);
        let e = q[b][0];
        let f = a.innerHTML;
        let g = a.currentStyle ? a.currentStyle["width"] : window.getComputedStyle(a, null).getPropertyValue("width");
        let h = a.currentStyle ? a.currentStyle["height"] : window.getComputedStyle(a, null).getPropertyValue("height");
        let i = document.createElement("div");
        i.style.display = "inline";
        if (a.style.cssText !== "") i.style.cssText = a.style.cssText;
        if (a.className !== "") i.className = a.className;
        if (a.id !== "") i.id = a.id + " ";
        let j = String(/<img((\s+\w+=[^\+]+))>/im.exec(getOuterHTML(a))[1]);
        let k = j.indexOf("width=") > 0 ? /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|["']))+.)["']?/.exec(j.substr(j.indexOf("width=")))[2] : "";
        let l = j.indexOf("height=") > 0 ? /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|["']))+.)["']?/.exec(j.substr(j.indexOf("height=")))[2] : "";
        if ((String(h) + l).indexOf("%") > 0 && checkElementHeight(a) !== false) {
          l = "";
          h = "auto"
        }
        i.innerHTML = '<div id="divfsWebPid_' + C + '" style="display:inline;width:100%;min-height: 100%;height:auto !important;height:100%;"><object style="" width="10" height="10" name="fsWebPid_' + C + '" ID="fsWebPid_' + C + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="FlashVars" value="url=' + e + "&mode=img&imgHeight=" + l.replace(/%/g, "%25") + "&imgWidth=" + k.replace(/%/g, "%25") + "&styleHeight=" + h.replace(/%/g, "%25") + "&styleWidth=" + g.replace(/%/g, "%25") + "&id=" + C + '"/><param name="movie" value="' + I + '"/><param name="wmode" value="transparent"></object></div>';
        a.style.display = "none";
        a.parentNode.insertBefore(i, a.nextSibling);
        C++
      }
      function addEmbedObjectBG(a, b, c) {
        let d = window.getComputedStyle(a, null);
        let e = q[b][0];
        let f = a.innerHTML;
        let g = a.currentStyle ? a.currentStyle["width"] : d.getPropertyValue("width");
        g = !!g && g != "auto" ? g : "100%";
        let h = a.currentStyle ? a.currentStyle["height"] : d.getPropertyValue("height");
        h = !!h && h != "auto" ? h : "100%";
        let i = d.getPropertyValue("background-repeat");
        i = i ? i : "repeat";
        let j = d.getPropertyValue("background-position");
        if (j == null || j.split(" ").length < 2) j = d.getPropertyValue("background-position-x") + " " + d.getPropertyValue("background-position-y");
        a.innerHTML = '<div style="width:100%;min-height: 100%;height:auto !important;height:100%; position:relative; z-index:0"><object style="position:absolute; left:0; top:0;" width="' + g + '" height="' + h + '" name="fsWebPid_' + C + '" ID="fsWebPid_' + C + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="FlashVars" value="url=' + e + "&mode=bg&backgroundRepeat=" + i + "&backgroundPosition=" + j.replace(/%/g, "%25") + "&id=" + C + '"/><param name="movie" value="' + I + '"/><param name="wmode" value="transparent"></object><div style="position:absolute; left:0; top:0;">' + f + "</div></div>";
        if (a.style.position != "" && a.style.zIndex == "") a.style.zIndex = "1";
        C++
      }
      function checkElementHeight(e) {
        let a = e.style.position;
        e.style.position = "absolute";
        let b = e.height;
        e.style.position = a;
        return b != e.height ? b : false
      }
      var C = 0;
      window["webpFSCommand"] = function (a, b) {
        if (a == "status") {
          b = b.split("|");
          if (b[1] == "finish" || b[1] == "error") waitListNext()
        }
        else if (a == "img" || a == "imgresize") if (b != "") {
          b = b.split("|");
          let c = document.getElementById(String("divfsWebPid_" + b[0])).parentNode;
          c.style.width = b[1];
          c.style.height = b[2];
          let d = document.getElementById(String("fsWebPid_" + b[0]));
          d.setAttribute("width", b[1].indexOf("%") > 0 ? "100%" : b[1].replace("px", ""));
          d.setAttribute("height", b[2].indexOf("%") > 0 ? "100%" : b[2].replace("px", ""));
          d.style.width = b[1].indexOf("%") > 0 ? "100%" : b[1];
          d.style.height = b[2].indexOf("%") > 0 ? "100%" : b[2]
        }

      };
      window.DecodeWebPImage = function (a, b, c, type = '') {
        if (c = "js") {
          try {
            var d = {
              width: {
                value: 0
              }
              , height: {
                value: 0
              }

            };
            let e = new WebPDecoder;
            let f = false;
            b = b;
            let g = e.WebPDecoderConfig;
            let h = g.output;
            let i = g.input;
            if (!e.WebPInitDecoderConfig(g)) f = true;
            let j = e.VP8StatusCode;
            status = e.WebPGetFeatures(b, b.length, i);
            if (status != j.VP8_STATUS_OK) f = true;
            let k = e.WEBP_CSP_MODE;
            h.colorspace = k.MODE_ARGB;
            status = e.WebPDecode(b, b.length, g);
            d.width.value = h.width;
            d.height.value = h.height;
            ok = status == j.VP8_STATUS_OK;
            if (!ok) f = true;
            var l = !f ? h.u.RGBA.rgba : null
          }
          catch (err) {
            l = null
          }
          var m = {
            Data: bitmapToPNGFromCanvas(l, d), type: "PNGDataBase64"
          }

        }
        if (type) {
          return m
        }
        InsertIntoCacheList(a, m);
        writeResultIntoElement(m);
        waitListNext()
      }
      if (q.length > 0) waitListProcess(x)
    }

  }
  (function (i) {
    i()
  })(WebPJSInit);
}
  ());
