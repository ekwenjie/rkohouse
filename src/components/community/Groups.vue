<template>

    <div>
        
        <v-toolbar>
            <v-tabs
            dark
            background-color="primary"
            grow
            >
                <v-tab>
                    Community
                </v-tab>



                <v-tab> 
                    Groups
                </v-tab>
            </v-tabs>
        </v-toolbar>

        <v-card>
            <v-toolbar dense>
                
                <v-text-field
                    hide-details
                    single-line
                ></v-text-field>

                <i class="fas fa-search" style="margin-right: 10px"></i>
                <i class="fas fa-plus-circle"></i>


            </v-toolbar>
        </v-card>


        <div class="container" style="padding-top: 0px; margin-top: 0px">
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                src="https://photoresources.wtatennis.com/photo-resources/2019/08/15/dbb59626-9254-4426-915e-57397b6d6635/tennis-origins-e1444901660593.jpg?width=600&height=630"
                ></v-img>

                <v-card-title>Weekly Tennis Sesh</v-card-title>

                <v-card-text>

                <div style="text-align: left">
                    Join us every Wednesday for a 2 hour tennis session. Anyone and everyone is welcome in this group. Let's get sweaty and forge bonds through the sport we love.
                </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-text>
                    <v-chip-group
                    >
                        <v-chip>Tennis</v-chip>

                        <v-chip>Sports</v-chip>

                        <v-chip>Dinner</v-chip>

                        <v-chip>Lepak</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                    >
                        JOIN GROUP
                    </v-btn>
                </v-card-actions>
            </v-card>



            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                src="data:image/jpeg;base64,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"
                ></v-img>

                <v-card-title>Unleash your inner Jay Chou</v-card-title>

                <v-card-text>

                <div style="text-align: left">
                    Want to have some fun singing and drinking? Say no more, join us and sing your lungs out every Friday. Stay on for dinner and drinks to mingle and have some fun.
                </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-text>
                    <v-chip-group
                    >
                        <v-chip>Singing</v-chip>

                        <v-chip>Drinks</v-chip>

                        <v-chip>Dinner</v-chip>

                        <v-chip>Karaoke</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                    >
                        JOIN GROUP
                    </v-btn>
                </v-card-actions>
            </v-card>



            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRUYGRgYHBgYGBgYGBgYGBgYHBwaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCw3NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NP/AABEIAJkBSQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABEEAACAQIDBQUEBgcHBAMAAAABAgADEQQSIQUiMUFxBlFhgbETIzKRM0JyobLBB1JzgqLR8BRig5LC4fEVJDRjQ7PS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAKBEAAgIDAAECBQUBAAAAAAAAAAECEQMhMRIiQRMyUWGBBHGRsfCh/9oADAMBAAIRAxEAPwAvgBuVulMfxNPGHCS4Rdyt1p+pnDLwnkM9JFXGD3zeX5SpUGpl3FL75vKVHXUzgEaLrCuy13x0b0MGousLbKG+OjehnHAOou+ephOinCUa43z1MP4TC3tOZw6bFW1BPsyMUm9srEaWI9ZY2cuWmoPICcYHFhha+uvqZvVOMUzFu20SP8UF7fQewcMQLG48ddBCxG9A3atPc31vcDw84k11jRe0hMw9CtWZ6FJrB139NLA3F5xs3Gtsus6OocMq6jQ8yLX5ayXZGNqUajshpgBSWDtlzDSwXva/KK23NqVMRULva/AWFgAOQmepNr6FXVs52/tA4ms9UqFzW0HIAWHXhKFOmNOsiJM7S8olSo4IYZBeO/ZrDoxGYgeP5RJwlMk6Ro2BhnZwDcBdT+X32ivofYetn4nNU0ZRcFSgFju8GPzhluBipsnDsmJAcjNZr6juvpG2asVuLsz5Ek9EOGG6JR2vhw41JFhfTgdecJILaSltPhYAkkMNBc8oZqoUwRfqsQNqsxIQtdVuF8ATfTwgDE0hGbHvlVkKpqQcxG+Ldx7otYsTHezUgbUojXWQf2cHjO6pMiNSMrO0evh1tOqFEXE4veT4ekSdJ1nDZ2fwCKqOWDZmKZd4FToSb2sdBwvzmlVfhsO6ZtsSlTRlFQP7TMSALgLoLXHO5v4i3jNLI3Y8fcjPqKOy6dnc+A9ZLtWizLZfD1k9CnY379JDXxYWpY8Mo+ZJ/lHVKFSFbblaOmFlTwAH3CV9ocR09GEtYk6KZVx41XofUQT4/wABj1fkrbc+Bep9In41Y57aHu16/kYnYscZny6kXxfKCHE5YSZknLLFLBSj9Cv2p5T0dPtL6iSYYe5HWcAby/aHrFOFztCvu28Kj/iqQbDHaZNyoO6o/q/84Flo8Iy6P2FHu6v2qf5zxhwkuEHu6n2k/DOSvDqJBlUVMSPet5Sm41MvYke9bylRxqYQESDWF9lDfHRvSDEGsMbHTf8AJvSd7hYCxA94epjtsqiDaJWI+kbqfWPuyBa3lGgrYk3SDoWw6CDNnYazBuWXQQqJyq2M3yhbTMSlSaIz8UodogvsTmvxFrd8vfWMq7ZdVp7y5gSB4i/MeMlLjHXUZrtagiI+fOtUMLLYZctr3PO8VsUpzHXTWw7o7bapuajBbb4KDMBwa3En4Yt4/Zj/ANo9koBe4UZWuC3DQ90ki4Ganbn5T1hbSOVPs/hsMM+LqB3tfIpIAPLeGp+6Ccdt7Cpf+z4ZQbjfffIHMgMTYw3fDq+p1sDFIjqWFx3Rp21jQMpRSucK5FiBbXLa/HqIubM7Uo1w9GiOeZ0Qn/KozD5E8eMMHb9OrlSpQTKNFqAjIByAYG69CYr+4fG+DB2dxz1HphrWAaxyi+gIGvnHCKuwqPs3XI10a6kcSDYkWa2ouOMapqwO4mfKqkeXg3a2KFPKzGwvY2ve3PhL1M6H74C7XWyLfvM6c7jYsV6qA1NVrVjc3Ut8VuIJtexgPtJhVRmVTw07ofwuC9sc9JcgAsVBJ5anXvgHtBhGRrNx48b8fGZWtXX5NMX7CjXMqy/VSQBNZyYWjlFh7YaKHUnhcXg/DULxo2fscZCzFhpuWF7t3HunN2dQUxuIR64ZBcXClhfesPi117o7r8PlEjZr+yOUrdjwJW4ufi6WFo8D4R0EpDdsjk1SOqXAQdjsPmfTkFufC5hGjwE9dLyzj5RJqVOytidAPKV8b9XofyljGcBKuKOi9DJz9/wPH2Itsj3a9fyMVMSnGNm1DemOoi1iU4zPl6XxcAjrOWWWHWcOsmWCGFX3PmJGw1HUSxgx7k9RIqgnM5ATtMlxWH/sf1P84te0Eae066Vvtk/PIfzifeWjwlLpp2EHu6n2k/DPbajqJ9hPon+2v4Z0OI6iQY6KWIHvW6iU3Gpl2t9K/WVXGsJxxTGsNbG+P91vSB0GsM7K+P8Adb0nLoXwXa30h6n1jbg8XYCKlQb56mHKIvaFOhWrHmhUBUHwvJKb3APeLyhhEPs7f3RJ9nowRQ3Gw07pvhNukYpRSs6vvHrKW3WtSB7mU/fLf1jKHaQe5/eX1kpPTGS2hb2xiAxSq1IFAdV+FWtyvAxxCUEfF5ArWKUF1IDNxYX5KDa/WMntEekKTMcxNlGmUX4ffEbt8xQUqVyMiXIvoTe5t8zJ9ZdaE7au03diWYksbkk+cGtWJPhxtOK50v1+UO1uz+SmH1OqpfvcgFrD9UXtzJln4xAlKVtAum19PQxx7L7KdwCr2vxvqLeMR7FWynjNJ7LUXpoGJ4gEARMrqI+GNyNF2FRNMKjFTc2XKCOGp05RgJi5snEo5UBgWBDAX1uAQ33ExjIvKYPk0Z869RGi2B6mLvbd8tNT4kfdGVzpFft99Ap7j+U7JSi0vsLD5kVOy2Ic7q24a3gftGlma5vfulbYG0HVly/ESAO7XTnDW3MEBTzNfPmIYW3e/Q9+szvcf2NHJfuKex9mGvVKjlqb6bvMX8YRxVPAUHCPX3wLMirmJbwNu/lCnZfDpTStUY7uiDXje5I8OURe0tamjH2a5Tc7w4m55njFSt0OlpsYsTtbDUQAlAm+vvXVDqeag5uHf4S9gO2VJlyOAgvcMpLC/iCLj5zI6mJJNyTPlxJHOXWKibnZtON2ktQ0QmVkGgdTe7cTc20PgY8I26Og9J+euz22Go1A17obB15EcL9RyP8AOb5g8Sr0ldDdSosYEmm7Fmk0qLdFtB1na1ASR3W++U6ZuB1nVCmfaMfq2XqTr/tKxm9JEpRWzrG/lKWIbQS9i+IlPGpwiZOseHER4vVB1EA4pYexY3B1gPEiZ5miAHcayNhJnGsjcSZUI4Ee6by9ZFV4SxgR7pv65yvX4TmBAntRwrE94P8AChiPePPagbtbxVD/AAL/ACiJml4cJS6aphPon+2v4BO+a9ROML9E/wC0X8AnY4r1EgyiKj/SN1lZxLLfSP1kDzgnKDWFtl/GfstBaDWFNm/EfsmcugfAHUG+epjFhKYMXnG+esP4ZpyAxxwaWQDwEmEiwvwL0HpJDeenGlFHnvrKl94yn2jPuD1HrLLHePnKu3T7nzEzN6Zatoz7arnTWLvbk3em+a6vTS3VbobeYjLtSnciKPabHpWrU6dsiImRTe93vcnwBJMWC2VkKlRQzHujth0XEU0pl8lRRdGIuOFr+l+cE7L7Mu5JbRBzvrfutCtXDKmS31ToYck09IrhjKNtrTKm1tlJUqFksp52G7mGhsOQjZsplKqp4AAadOUV0rC5AhHBViDe/wDxzkZW1ReKSbaHbYGENOuvtHLrqyEgCx1A4dY9ZhwmTYLbb1aqolF23d21rk31JN7W1E0/BuxAzCzWGYXvY211mjBNpVRj/VQVpplitwi128S+H6GH61S4Ph/OL3btv+3FuZjZZJp19iEFTRmuHrEHujD/AGpGpEl2z3FktdSLatfkf66LOT7pYwqu7hE4nv0AA1JJ5ATKaRgxGLUYRVDWZmZjxFyCBYHmbBfnEDbua1+McsZs3NRzLUsiMVsTcOdCXC/Ua55crXudYq40ZgVjRdSst4vwoVC1xedA6QxhtnqhDtY5mCrmAYXuCdDoTlBlba1JVqkKLA62GgBuRoOWgB85qUk3SMrg0rZBh2t/XKaz+jnbm77B24/Bfv5jzmQobHp6Q3sbGlHUg2sQVPTlFmtaOi1xn6Hwa6X7jLkBdmdpLXpZ+emYdx5w297aR8TXjZHIn5UQYn4lnOJS48jPKx1Wd4hrAefpFbtMK1RXxFO6a94gTF0wBGBjdNfCAcbbvkMiSL4n0BVRrIXk9XjIHkDQEsAfdP0lavwljAHcbpK9fhOZy6DO0h3XP9ymf4P9pn+eaBt83VvGlT/CwmfZGlocJyNYwv0TftB+ASReK9RI8N9E37T/AECdrxXqJFjLhVb6R+sgYSY/SN1kRgCfUxrCez/i/dMG0xrCuzhveRhXQMCMu+epheiYMZd89T6wulKcgMccH8C9B6SW9xIMALU16CdtUCqWYgAC5J4AAXJnpp+lfsYGtso1nClmYgAXJJNgB4mJfafttSCmnTKk/rte1x3KNfnAPbXtI9ViiMVQE2A0J/vHx9Jn1dryEY30s3QZx+26z3Yu5vpmV90eGUAZflFzF1WZt468j3/7z0OVP9a9Z9iVBXMPl62lVFIRysddh7WzUVB42seoljEU8yEiLHZtSzMo8D5H/iPQwxCWtMmVKMj0MLco7FFkK6yxgcbZ1vwJym/Cx0PrL+0MGEUs3Amw8SeX3fdAVSjcbt5ypoEn4ujSOyeH9nXpqFCg3JA52uFJ8bXHSaAjbx85nfYyq5agGGqgKTx7yPuImgUzvt5w43r8kM+5X9iJG3W6wN22P/bg90K0zuv1gjtqw/s4vC36RK9RmeYzqjiWUkrxIse4j/kA+U9pWN5zRVS4BNpNlVfsGsYQaARS12ArXJuGuQlQD7LW498VqqkGxjftauESmiC7MgBOtguYkADkTz6RdxGFZrm0VPZqptFahWS28tytyml7MbXPdfQa9Yv7QqEub8zDhokGCdpUNby+NqyGVOikpB0PGe06hQ2PD+tROcLgWquqLxPM8FA4kx3wGwMIgAq5qjc7uyjyCkSs5xj0jHHKXAl2A25kbIW3WtfpyPlNaGIAAPfMe/6FRBD4ZmpuOCsxdD4a6j5npGzs/tksopPo6G1u7XhfukI5VF6HnhbSsdGF2B6zrELpIsM1xLDjSWW0zM9NFSqPd/KAcVTh7EvZPlAmIqXkMhfEB6qSs66S9VlWqNJE0FzAfA3QyvXOks4H4G6GVa/CccDdtfCP2KfdnESNO71jvtX4V/Yj1eIntD3SkSTNSwx9yf2n+gTtDvL1Ehw59yf2n+gSRPiXqJJ9GXCs30r9ZFJW+lfrI5wTumNYX2Wu/wCRgqkNYa2UN/yMMeiy4A3HvD1PrGnC4a8Wag94ftH1jngl4R4K2LN0gjRWygdwiP2/23kX2CniAz25D6q/n5DvjtXrKis7GyqCzHuAFyfumE9odpe1qO54uSeg5DyFhN0+JGSG22BcfXuTBdQzuvVuZXZpyQWz4ifUhqVPOeKZ9msYwC/sDEeyrKzfCLq32Tz8tD5TTsZjadKmrNvEi6KDq1+B8F8ZltEDOTysD8wf5QvtCvlrMgN1VKQXwBRX9ST5yOTEpbL4szgmkWdoY16pu56AaAdBIKY0njiSU+Em1SDbbtjn2LrXq0we+aIh326mZZ2Oe2Jpjlm/IzUUO+3UxYqv5BJ3/BDTO6/UwL22/wDGXyhhOD9TA/bMXwy+UD5/vqGt/wC+hmqPlv4ys7a3k9VZAUnBGB8QfZDK5BtyNjKlDEuy5S5DA3VzqPFXH1lPzHKDAD3x27K7OUFaj2YqMwHK/L1v5SdJFVKT4CdobIdUV2TJmG8t728RzynxsYr7Sw9po+Jx/tcQF4owYHxALD1EVdpYcVKQqopAIvY8QO49J0Zb0aJY2oq+tWCuzGEsKtTuCoOpuW9FntXEHNxhrCUPZ4YDmxLGLeIOplE/Ntk5R8EkGcDjPGWNquyZcQh3ksHH6yd/UekA4WpYw3UxAyANwbd63ERxphT8o0aH2V20uIpgg6jRhGWo+7eYH2T24cLiCpO5myN0vof68Ztq4oMgIOhGkun46Mc4W00Vq1fMp8oMqmSq+6ZA7TPJ2XjGinUleqNJYqSvU4RShbwJ3T0Mq1jpJsGdD0Mr1W0nAB+0zup+yP42iZnP6gjltA7qfYcfxmKN5RE2aJQ+hP7Q/hEkp/EvUSKk3uf8Q/hE7pHeXqJN9CiF/pX6yOFaLIpJKqWeqqXbXKpyjQd+plDbeJWk9i9MX1CZGAVeV3XUdTOoHke0RrDWyV3vIwBhMSjkAGx45SQbjvRho48R5gRh2R8XkYY9BN6AVX6RvtH1jtgYk1vpG+0fWPWCWwlMXzCZX6Ra/SVtX2GEKAa1jkBuBlAIZtOJuLjTheYjVxVzaaB+mPaKmtSpA3KIzMByLkWB8bKD5zLS+t5uatmZOkS1HkBaduZHOQGdqTPqx0/rjPaS6zzHqQRfnqD3iE72J8C9/kP9X85axdUmq5PEJRHyRRK2ATdY9y+pkmK+lqfur91vynPgUH6aZkU94BnaU5yr2pICMpyi45g2nVGuMsyOy6oO9l0IxFM8swmpL8Z6zKuzlT/uKf21mrKN89YsTmQINH6mCe1i3w4hgDRupgXtFtCj7AZnBF8py71jz58usEvlGSbejOXQm9hIHw7d0PNWw/BKwueG7bj5mR4ykEF2aTsq8bqwAKLXjZsXGFAAeWhHhFXEYmx3Tee4PaJFRR5RpRbQsJeLHjDYW1QMNQpPmrb6n55orbB2talWoON6iWZTa4KtqoP+a0atkYjWxBOhIA4kjXL6/OLWGpq6F1W3tWzHvvcghvEcP3ZO1GLPRxp5Wvt/RbrH3dEd6tf/ACk/lFPE8TG/HizUR4sP4GihjDvHqY2En+rVMjoNrL+PfSn1J+7/AHg2gdZPtmqR7MDmD5cJZraMseMBYireq5Hff5afzms9hdsmrh8jHep6DxU8P5THa+67DrGbsRtL2dZLnRtD4gymSNxtEYyqTTNhprumVakvUxuGUq0yM0Ip1DIKhk1SVqhgCyfCNx6GVqraSTCNr5GVaz6TgFXGndp/ZcfxxVvGXFPuUuj/AIxFiViSZoSH3P8AiH8AklE7y9RIx9D/AIh/AJJQG8vUSTGXCpjK+WqLmwFVD6H8pzj0LOxLcelgAALC8E9q6pSr4Gxv4i4/1CW8LiM6Zr6g6/DwOtyT5w1SsHuUq+BZNaZIsQcmawvcWKEfA/GzDzjZ2O2qKxs3xgG9xlLAaEleTA6Ecuhg1CGHH77+ggbE5sPVWum7Zhn42FrAMfC263epv9WGLt7BJaGPEfSN9o+sd8G3CJKVBUs44PvW7jzB8QbjyjHicd7GjUqE2FNHc/uqW/KNjdSFyK4mGds8cKuNxLjgajgeIXcB/hi4zTt3J1J15nvPOQmegjG2T5rgTkThG5ec6M4JLSbnLWPUtTVrcGt8wZSQwpRUOhS/G1uoIPDygZy2d7LpXsv6zqtvBcpPrKeJfNUc97+kK7MYKQ7aBFZzflc39LQAWNieZ9Tx9YThjzF0Ujnyve0s4bCEiBdk1zop013dSST05DxjbSpOo1TS3Ebw+YmeaorGmW+zmF9/T8HU8fETWFG+eszDs2w9oh/vL4cxNLbEIrEsygXtcsOJ4DrJroz+wodrMWyuQ5ZKKLmfKfjubb2Xe5WA0vE3C7Zq1WLU1ZaK7qrZVVj3kHdHTUkw7trFpia5Dl/Zi4svO3C4vw4/OD9q7RenlSlTVFYXUlc9QKNLhPhTprJt7NsYtRQO2hUok3qYbI175kGS/iSmnzhz+0YOvTVCHWwALK4zXAtchhZvK0H4HCCrnBSsS3F3CWJ8QG08p2Njug4X6XI8r6xXJD+FnC9mUJ91iEfwcMjW8r3+6dU9jFGuwBt+qyt6G8lbAuovqLjutBlV3U63nW37iOCQfwuJCEeBBHlKuFp+zr4iieAqe1TuyVN7ToQYLTaJHxbw8ePzlyptVGZGsVZUyEnUMulr27rD74ri/Fovgmoytsu4871M9zj7wR+cTscd49TD+KxgbKVIOUg8e4xbxjgsbHmY+BP3B+slFtOLPMOdZ9tprsngp9ZDRbWR7UqXdekvXqMalopbRswDfW4Hxn2z6mVlseBBkb0y1zK9F7GXS9NGebflZv8A2Zxwq4ZWvqBlPUSarM57D7c9m4RjuPZT4NyM0OqZhnHxdGuDtWVKsqVTLNQyrViDM8w7a+Up1X0ljDnXylOudIUBlbFPuU7f+wDrmW0p/wDTm8fmktKSyhT8KZuRbVjfUDwy/MyPN40/8j/zlCY0J9D/AIh/CJJQG8vUTzL7n/EP4RJMON5eokmFCz28p7pcfUdL9GuvqVlHs7XzFk77fVvYm9vT74w9qcMXp4gW1yEjqu8PSIGw8TZxqLFbi97XBuOHHjKxXlAnJ1IfKNXv0+0wH3LO8VRDoRa6sCpsp5+LSrSqa3W9msdxAvHlmaXBUDCxtflvM5v0XQf1pJ0PZV7LViC9B75kOl+JsB6gqf8ANDPb7Fez2fXPNwtMeOdgp/hzRYrVTRxNOpqFaynS3w3J8PhZ59+mLHWXD0AeOeq3luJ6vLQjckSnKosy8mcz2eM02mU+zWMllaSo0447DTtKxGoPCQsZ4TOCXVxrZbHUHiDz1uLzwvTYWKlfFT/O8p3ns6gWXsMiKxIc8NDYaeBHP7pcO1GUaNmsedwCOgPGBc3/ABPCSdBA42FSoO0trB/jBvwupI087zROyFLDVKbPSR3q2yOzsGyaaZdAACL8Bc6gmZNh8OTztNJ/RXS9nWdi91ZLMgF7sGUoeo3vmZHLFVplsUndtWNeyezgUZn1Y/d0g/tJWp03CogepltrqBf4bjhCu2dqY9rphsHlHKrWO71yJc26nykPZ3ZFQU3bGPTOIdywdUNlTKoAByrrcMb+PGZ/h6NMc9Pf/Bbw+Hq01Z8Q7O7fCmgCX58NPBRB+MxFRQBndQRdRnaxHhrHmvsSi3x4kW8BbzJMrY7s9h2RULlkJuXzqGWw+oAhBvpe5EXw+o0czsWtl9oAgyVg7W0VwAxt+qwJFxLONr4RhcVLN3Mth9xMuVuzGz1Gju7fqvWyj5qs4pdn9nWuw1udFxDkW5akDWBxX1HWT7C3i8GBqLWOoI1BHgYNqoRHqng9m01ZczBTwyu7a99m0HLhxiXtl6aPlpOaingcuVr3+Erc3PiJSNiOUWUGqGVa51v85NWexswKnuYFT98ruQZVIlJnVI6yvjmu/QCSobaynUe7E98ZdAuE9FpUxmHIOYcD6yRXtLKVLjLa4P3Rk3F2FpSVMgwOKtYTR9h9qkdFSo1mAtmPA91/GI2M2YBYoPqgyjhsSUax58Yk1GatHKMsbpmye0DC6kEeEr1eED7EqB1DJa/1gNPMjnCTs3MTLRdnuHbelGuZaoXDShiTy8QPInX7oUtiMjA3Rcrc3Ns7KRfiLjTw1kmXxb/OP5T4VDcC50voGQj/AC8uk5zf1kWMKO20cKKaAA3BfN00t+UqU3AI8CIQ2xwXr+UDr+ciwou1kRyTmGvEa85jODJpVVU6FHKHv0JQ2vNbmTY//wAmp+2f/wCwzRg4yWX2Heg6WGcoLcM7s511+BdOcLUmFrXYg8zaigHf+sR/VjFfs79J8oVxv0w+1/qiyCiHbdNStxkOV1bdLHduL6tx0PWJXavazYnEM7HRFSko7ggsx82znzmgdov/ABz0T1EyjEfE32m9TL4ERzEbGRkz1p5NRE+nSGcT1ZwCQmdjDOdQjW77G0beyH/jv+1/0pD21vgHSSlOmOomeYPZlWo2VVt4nQCNR/RzXKqy1qZzAHeVltfxF7yxsz4o+J8FP7IkcmWSei0MUWtmfr+jDEHhXo/x/wApap/opr88TRHRXmg4bhLSxPjyH+DEzxP0S1eeLTyRv/1HTsl2WfA0qiLUR3dg3tCLFQAAFAN9BvH94wmsk5TviyYPBLhdNetpcr4259/KS/208wPnBjfD5yqYrnIPw4h44wH6vpBuO2bQrLldDl10BsJVSSid5N9O8UuFE9jMGRbI46VXHoZXqdg8GeBqD/Ev+IGFmnpnWGhcf9HOFP8A8tbzdCPwSOn+jrDowZK1VWHBlcBh0IAtGenOzO8mFIAt2Ua1jiajj9Wp7xT1DkiCsb+j+k/B1Q96Jk/hBy/dG9pGeEXya4Ot9FLDdg6CA3dnP97Lb5ARH7ZbFXCurIdx9Lfqnw8NJrVTg0zv9JP0afaH5ymKTckdJJRYlUxfWEdnpd1lKh8I6Qhsz4xKz4zsfUEcI1014qWX5GANq0bMTDuE4P8AbaDNs8ZLH8xfLvGd9ntsNSca8OR4Edx8JpeH2rSdAype/HXUHmDMYpcY/wDZv4X/AHfSHLFXZGEnKOxjrYtOSW84MduF+/X5GTPITxHX8jJIDPMOAWOa+g5oAePI9079mn9Bv5yLC/CftH1lyMA//9k="
                ></v-img>

                <v-card-title>Dating Club</v-card-title>

                <v-card-text>

                <div style="text-align: left">
                    Single for too long. Don't know where to meet new people? Join us every Saturday night and meet new people every single week. Our moderators ensure a good mix of the genders in the group. Time to uncage your heart and find true love.
                </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-text>
                    <v-chip-group
                    >
                        <v-chip>Love</v-chip>

                        <v-chip>Dating</v-chip>

                        <v-chip>Romance</v-chip>

                        <v-chip>Dinner</v-chip>

                        <v-chip>Flings</v-chip>

                        <v-chip>Marriage</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                    >
                        JOIN GROUP
                    </v-btn>
                </v-card-actions>
            </v-card>        
        </div>
    </div>
</template>

<script>
export default {
    name: 'Groups',
data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    }
}
</script>

<style>

</style>