/*
 * Copyright (C) 2020 - museum x, Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

package x.museum.quest

import kotlinx.coroutines.InternalCoroutinesApi
import org.springframework.boot.autoconfigure.ImportAutoConfiguration
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.context.ConfigurationPropertiesAutoConfiguration
import org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration
import org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration
import org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration
import org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration
import org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration
import org.springframework.boot.autoconfigure.web.reactive.HttpHandlerAutoConfiguration
import org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration
import org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration
import org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration
import org.springframework.boot.autoconfigure.web.reactive.function.client.ClientHttpConnectorAutoConfiguration
import org.springframework.boot.autoconfigure.web.reactive.function.client.WebClientAutoConfiguration
import org.springframework.boot.runApplication
import org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration
import org.springframework.cloud.autoconfigure.RefreshAutoConfiguration
import org.springframework.cloud.client.CommonsClientAutoConfiguration
import org.springframework.cloud.client.ReactiveCommonsClientAutoConfiguration
import org.springframework.cloud.commons.util.UtilAutoConfiguration
import org.springframework.cloud.config.client.ConfigClientAutoConfiguration
import org.springframework.cloud.configuration.CompatibilityVerifierAutoConfiguration

@SpringBootApplication(proxyBeanMethods = false)
/**
 * https://stackoverflow.com/questions/43653655/what-is-difference-between-importautoconfiguration-and-import
 * You would use @ImportAutoConfiguration when you don't want to enable the default autoconfiguration with
 * @EnableAutoConfiguration. As you probably know, @EnableAutoConfiguration attemps to configure beans that are
 * located on your classpath eg tomcat-embedded.jar. Whereas @ImportAutoConfiguration only runs the configuration
 * classes that you provided in the annotation.
 */
@ImportAutoConfiguration(
        classes = [
            // Spring Framework and Spring Boot
            ConfigurationPropertiesAutoConfiguration::class,
            ProjectInfoAutoConfiguration::class,
            PropertyPlaceholderAutoConfiguration::class,

            // Spring WebFlux
            CodecsAutoConfiguration::class,
            ErrorWebFluxAutoConfiguration::class,
            HttpHandlerAutoConfiguration::class,
            HttpMessageConvertersAutoConfiguration::class,
            ReactiveWebServerFactoryAutoConfiguration::class,
            WebFluxAutoConfiguration::class,

            // Jackson
            JacksonAutoConfiguration::class,

            // Spring Cloud Commons
            ClientHttpConnectorAutoConfiguration::class,
            CommonsClientAutoConfiguration::class,
            CompatibilityVerifierAutoConfiguration::class,
            ConfigurationPropertiesRebinderAutoConfiguration::class,
            ReactiveCommonsClientAutoConfiguration::class,
            RefreshAutoConfiguration::class,
            UtilAutoConfiguration::class,
            WebClientAutoConfiguration::class,

            // Spring Cloud Config
            ConfigClientAutoConfiguration::class

            // Actuator
//            EndpointAutoConfiguration::class,
//            HealthContributorAutoConfiguration::class,
//            HealthEndpointAutoConfiguration::class,
//            MailHealthContributorAutoConfiguration::class,
//            ManagementContextAutoConfiguration::class,
//            MongoReactiveHealthContributorAutoConfiguration::class,
//            ReactiveManagementContextAutoConfiguration::class,
//            ShutdownEndpointAutoConfiguration::class,
//            WebEndpointAutoConfiguration::class,
            // BeansEndpointAutoConfiguration::class,
        ]
)
class Application

@InternalCoroutinesApi
fun main(args: Array<String>) {
    runApplication<Application>(*args)
}
