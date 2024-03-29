import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-default navbar-fixed-top navbar-shrink">
                <div class="container">
                    <div class="navbar-header page-scroll">
                        <button
                            type="button"
                            class="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand page-scroll" href="#page-top">
                            Celine Is Awesome
                        </a>
                    </div>

                    <div
                        class="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul class="nav navbar-nav navbar-right">
                            <li class="hidden active">
                                <a href="#page-top"></a>
                            </li>
                            <li class="">
                                <a class="page-scroll" href="#services">
                                    Services
                                </a>
                            </li>
                            <li class="">
                                <a class="page-scroll" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li class="">
                                <a class="page-scroll" href="#about">
                                    About
                                </a>
                            </li>
                            <li class="">
                                <a class="page-scroll" href="#team">
                                    Team
                                </a>
                            </li>
                            <li class="">
                                <a class="page-scroll" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar